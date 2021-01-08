import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_ROOT = `${environment.apiAuthService}/api/service/authentication/authenticated`;
const GET_BOUGHT_BOOKS_BY_ME = `${API_ROOT}/check-bought/`;
const GET_USER_DO_BUY = `${API_ROOT}/add-book-for-bought-books/`;

@Injectable({
  providedIn: 'root'
})

export class BoughtService {

  constructor(private http: HttpClient) { }

  getInfoAboutBoughtBooks(id: string): Observable<any> {
    return this.http.get(GET_BOUGHT_BOOKS_BY_ME + id, { withCredentials: true } );
  }

  userDoBuy(id: string): Observable<any>{
    return this.http.get(GET_USER_DO_BUY + id, {withCredentials: true} );
  }
}
