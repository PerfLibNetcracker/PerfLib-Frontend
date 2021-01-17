import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserInfoDTO } from '../model/UserInfoDTO';
import { tap } from 'rxjs/operators';
import { SubscriptionInfoDTO } from '../model/SubscriptionInfoDTO';

const API_ROOT = `${environment.apiAuthService}/api/service/authentication/authenticated`;
const GET_SUBSCRIPTION_STATUS = `${API_ROOT}/check-subscription`;
const POST_SUBSCRIPTION = `${API_ROOT}/add-subscription`;
const GET_INFO_ABOUT_SUBSCRIPTION = `${API_ROOT}/check-subscription-info`;

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<UserInfoDTO> {
    return this.http
      .get(GET_SUBSCRIPTION_STATUS, { withCredentials: true })
      .pipe(tap((data: UserInfoDTO) => data));
  }
  addSubscription(days: string): Observable<any> {
    return this.http.post(`${POST_SUBSCRIPTION}/${days}`, {
      withCredentials: true,
    });
  }
  getInfoAboutSubscription(): Observable<SubscriptionInfoDTO> {
    return this.http
      .get(GET_INFO_ABOUT_SUBSCRIPTION, { withCredentials: true })
      .pipe(tap((data: SubscriptionInfoDTO) => data));
  }
}
