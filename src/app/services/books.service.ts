import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // tslint:disable-next-line:variable-name
  private URL_findAllBooks = 'http://localhost:8080/api/service/search/find-all';
  // tslint:disable-next-line:variable-name
  private URL_findAllGenres = 'http://localhost:8080/api/service/search/find-all-genres';
  // tslint:disable-next-line:variable-name
  private URL_findBookById = 'http://localhost:8080/api/service/search/';

  constructor(private http: HttpClient) { }

  getBooksList(): Observable<any> {
    return this.http.get(this.URL_findAllBooks);
  }
  getGenresList(): Observable<any> {
    return this.http.get(this.URL_findAllGenres);
  }
  getBookInfo(id: string): Observable<any> {
    return this.http.get(this.URL_findBookById + id);
  }
}
