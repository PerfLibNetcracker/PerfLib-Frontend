import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_ROOT = `${environment.apiAuthService}/api/service/authentication/authenticated`;
const GET_RATED_BOOKS_BY_ME = `${API_ROOT}/rated/`;
const PUT_RATING_FOR_BOOK = `${API_ROOT}/update-book/`;

@Injectable({
  providedIn: 'root'
})
export class MeratedService {

  constructor(private http: HttpClient) { }

  getInfoAboutRated(id: string): Observable<any> {
    return this.http.get(GET_RATED_BOOKS_BY_ME + id, { withCredentials: true } );
  }

  setNewRatForBook(book: object, id: string): Observable<object>{
    return this.http.put(PUT_RATING_FOR_BOOK + id, book);
  }

}
