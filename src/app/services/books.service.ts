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
const GET_BOOKS_BY_AUTHOR_ROUTE = `${API_ROOT}/find-all-by-author/`;
const GET_BOOKS_BY_GENRE_ROUTE = `${API_ROOT}/find-all-by-genre/`;
const GET_BOOKS_BY_BOOK_NAME_ROUTE = `${API_ROOT}/find-all-by-book-name/`;
const GET_GENRES_ROUTE = `${API_ROOT}/find-all-genres`;
const GET_AUTHORS_ROUTE = `${API_ROOT}/find-all-authors`;
const GET_BOOK_BY_ID = API_ROOT;
const GET_POPULAR_BOOKS_ROUTE = `${API_ROOT}/recommend/popular`;
const GET_RECOMMEND_BOOKS_ROUTE = `${API_ROOT}/recommend`;

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) { }

  getBooksList(): Observable<Book[]> {
    console.log("getBooksList");
    return this.http.
      get(GET_BOOKS_ROUTE)
      .pipe(tap((data: Book[]) => data));
  }

  getBooksListByAuthor(authorName: string): Observable<Book[]> {
    console.log("getBooksListByAuthor");
    return this.http.
      get(GET_BOOKS_BY_AUTHOR_ROUTE + authorName)
      .pipe(tap((data: Book[]) => data));
  }

  getBooksListByGenre(genreName: string): Observable<Book[]> {
    console.log("getBooksListByGenre");
    return this.http.
      get(GET_BOOKS_BY_GENRE_ROUTE + genreName)
      .pipe(tap((data: Book[]) => data));
  }

  getBooksListByBookName(bookName: string): Observable<Book[]> {
    console.log("getBooksListByBookName");
    return this.http.
      get(GET_BOOKS_BY_BOOK_NAME_ROUTE + bookName)
      .pipe(tap((data: Book[]) => data));
  }

  getPopularBooksList(): Observable<Book[]> {
    console.log("getPopularBooksList");
    return this.http
      .get(GET_POPULAR_BOOKS_ROUTE)
      .pipe(tap((data: Book[]) => data));
  }

  getRecommendedBooksList(userId: string): Observable<Book[]> {
    console.log("getRecommendedBooksList");
    return this.http
      .get(`${GET_RECOMMEND_BOOKS_ROUTE}/${userId}`)
      .pipe(tap((data: Book[]) => data));
  }

  getGenresList(): Observable<Genre[]> {
    console.log("getGenresList");
    return this.http
      .get(GET_GENRES_ROUTE)
      .pipe(tap((data: Genre[]) => data));
  }

  getAuthorsList(): Observable<Author[]> {
    console.log("getAuthorsList");
    return this.http
      .get(GET_AUTHORS_ROUTE)
      .pipe(tap((data: Author[]) => data));
  }

  getBookInfo(id: string): Observable<Book> {
    console.log("getBookInfo");
    return this.http
      .get(`${GET_BOOK_BY_ID}/${id}`)
      .pipe(tap((data: Book) => data));
  }

}
