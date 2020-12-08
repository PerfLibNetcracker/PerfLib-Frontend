import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private URL_findAllBooks = 'http://localhost:8080/api/service/search/find-all';
  private URL_findAllGenres = 'http://localhost:8080/api/service/search/find-all-genres'

  constructor(private http: HttpClient) { }

  getBooksList(): Observable<any> {
    return this.http.get(this.URL_findAllBooks);
  }
  getGenresList(): Observable<any> {
    return this.http.get(this.URL_findAllGenres);
  }
}
