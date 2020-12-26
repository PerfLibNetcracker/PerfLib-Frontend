import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookDTO} from '../model/bookDTO';
import {tap} from "rxjs/operators";
import {Book} from "../model/Book";

@Injectable({
  providedIn: 'root'
})
export class MeratedService {

  private URL_ratedByMe = 'http://localhost:8081/api/service/authentication/authenticated/rated/';

  constructor(private http: HttpClient) { }

  getInfoAboutRated(id: string): Observable<any> {
    return this.http.get(this.URL_ratedByMe + id, { withCredentials: true } );
  }

  setNewRatForBook(book: object, id: string): Observable<object>{
    return this.http.put('http://localhost:8081/api/service/authentication/authenticated/update-book/' + id, book);
  }

}
