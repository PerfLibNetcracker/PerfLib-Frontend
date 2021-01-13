import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserBoughtBooksDTO } from '../model/UserForBoughtDTO';
import { tap } from 'rxjs/operators';

const API_ROOT = `${environment.apiAuthService}/api/service/authentication/authenticated`;
const GET_BOUGHT_BOOKS_BY_USER = `${API_ROOT}/check-bought`;
const POST_BUY_BOOK = `${API_ROOT}/add-book-for-bought-books`;
const POST_BUY_BY_SUBSCRIPTION = `${API_ROOT}/add-book-for-bought-books-by-subscription`;

@Injectable({
  providedIn: 'root',
})
export class BoughtService {
  constructor(private http: HttpClient) {}

  getInfoAboutBoughtBooks(id: string): Observable<UserBoughtBooksDTO> {
    return this.http
      .get(`${GET_BOUGHT_BOOKS_BY_USER}/${id}`, { withCredentials: true })
      .pipe(tap((data: UserBoughtBooksDTO) => data));
  }

  buyBook(id: string): Observable<any> {
    return this.http.post(`${POST_BUY_BOOK}/${id}`, { withCredentials: true });
  }

  buyBookBySubscription(id: string): Observable<any> {
    return this.http.post(`${POST_BUY_BY_SUBSCRIPTION}/${id}`, {
      withCredentials: true,
    });
  }
}
