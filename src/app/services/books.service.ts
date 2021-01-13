import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';
import { tap } from 'rxjs/operators';
import { Genre } from '../model/Genre';
import { environment } from '../../environments/environment';
import { Author } from '../model/Author';

const API_ROOT = `${environment.apiDataService}/api/service/search`;
const GET_BOOKS_ROUTE = `${API_ROOT}/find-all`;
const GET_GENRES_ROUTE = `${API_ROOT}/find-all-genres`;
const GET_AUTHORS_ROUTE = `${API_ROOT}/find-all-authors`;
const GET_BOOK_BY_ID = API_ROOT;
const GET_POPULAR_BOOKS_ROUTE = `${API_ROOT}/recommend/popular`;
const GET_RECOMMEND_BOOKS_ROUTE = `${API_ROOT}/recommend`;

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooksList(): Observable<Book[]> {
    return this.http.get(GET_BOOKS_ROUTE).pipe(tap((data: Book[]) => data));
  }

  getPopularBooksList(): Observable<Book[]> {
    return this.http
      .get(GET_POPULAR_BOOKS_ROUTE)
      .pipe(tap((data: Book[]) => data));
  }

  getRecommendedBooksList(userId: string): Observable<Book[]> {
    return this.http
      .get(`${GET_RECOMMEND_BOOKS_ROUTE}/${userId}`)
      .pipe(tap((data: Book[]) => data));
  }

  getGenresList(): Observable<Genre[]> {
    return this.http.get(GET_GENRES_ROUTE).pipe(tap((data: Genre[]) => data));
  }

  getAuthorsList(): Observable<Author[]> {
    return this.http.get(GET_AUTHORS_ROUTE).pipe(tap((data: Author[]) => data));
  }

  getBookInfo(id: string): Observable<Book> {
    return this.http
      .get(`${GET_BOOK_BY_ID}/${id}`)
      .pipe(tap((data: Book) => data));
  }
}
