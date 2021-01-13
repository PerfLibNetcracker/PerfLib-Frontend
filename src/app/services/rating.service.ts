import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserBookDto } from '../model/BookDTO';
import { tap } from 'rxjs/operators';

const API_ROOT = `${environment.apiAuthService}/api/service/authentication/authenticated`;
const GET_RATED_BOOKS_BY_USER = `${API_ROOT}/user-book-rated`;
const PUT_RATING_FOR_BOOK = `${API_ROOT}/update-book`;

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor(private http: HttpClient) {}

  getInfoAboutRating(id: string): Observable<UserBookDto> {
    return this.http
      .get(`${GET_RATED_BOOKS_BY_USER}/${id}`, { withCredentials: true })
      .pipe(tap((data: UserBookDto) => data));
  }

  setNewRatingForBook(book: object, id: string): Observable<object> {
    return this.http.put(`${PUT_RATING_FOR_BOOK}/${id}`, book);
  }
}
