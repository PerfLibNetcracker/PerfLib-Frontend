import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserBookDto } from '../model/BookDTO';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

const API_AUTH_ROOT = `${environment.apiAuthService}/api/service/authentication/authenticated`;
const GET_RATED_BOOKS_BY_USER = `${API_AUTH_ROOT}/user-book-rated`;
const PUT_RATING_FOR_BOOK = `${API_AUTH_ROOT}/update-book`;
const API_RECOMMEND_ROOT=`${environment.apiRecommendService}`
const POST_FEEDBACK=`${API_RECOMMEND_ROOT}/feedback`

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getInfoAboutRating(id: string): Observable<UserBookDto> {
    return this.http
      .get(`${GET_RATED_BOOKS_BY_USER}/${id}`, { withCredentials: true })
      .pipe(tap((data: UserBookDto) => data));
  }

  setNewRatingForBook(book: object, id: string): Observable<object> {
    return this.http.put(`${PUT_RATING_FOR_BOOK}/${id}`, book);
  }

  postFeedbackToRecommends(itemId: string, feedback: number): Observable<any> {
    return this.http.post(POST_FEEDBACK, [
      {
        UserId: this.authService.getLoggedInUserName(),
        ItemId: itemId,
        Feedback: feedback
      }
    ])
  }
}
