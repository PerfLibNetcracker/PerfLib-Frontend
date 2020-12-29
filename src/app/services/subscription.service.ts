import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private URL_checkSub = 'http://localhost:8081/api/service/authentication/authenticated/check-subscription';
  private URL_addSub = 'http://localhost:8081/api/service/authentication/authenticated/add-subscription/';

  constructor(private http: HttpClient) { }

  checkSubscription(): Observable<any> {
    return this.http.get(this.URL_checkSub, {withCredentials: true});
  }
  addSubscription(days: string): Observable<any> {
    return this.http.post('http://localhost:8081/api/service/authentication/authenticated/add-subscription/' + days, {withCredentials: true});
  }
}
