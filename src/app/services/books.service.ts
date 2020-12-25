import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/Book';
import {tap} from 'rxjs/operators';
import {Genre} from '../model/Genre';
import {environment} from '../../environments/environment';


const API_ROOT = `${environment.apiDataService}/api/service/search`;
const GET_BOOKS_ROUTE = `${API_ROOT}/find-all`;
const GET_GENRES_ROUTE = `${API_ROOT}/find-all-genres`;
const GET_BOOK_BY_ID = API_ROOT;


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }

  getBooksList(): Observable<Book[]> {
    return this.http.get(GET_BOOKS_ROUTE).pipe(tap((data: Book[]) => data));
  }

  getGenresList(): Observable<Genre[]> {
    return this.http.get(GET_GENRES_ROUTE).pipe(tap((data: Genre[]) => {
      return data;
    }));
  }

  getBookInfo(id: string): Observable<any> {
    return this.http.get(`${GET_BOOK_BY_ID}/${id}`);
  }
}
