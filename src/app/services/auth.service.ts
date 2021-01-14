import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_ROOT = `${environment.apiAuthService}/api/service/authentication/authenticated`;
const POST_AUTHENTICATED = `${API_ROOT}/registration`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean;
  USER_NAME_SESSION_ATTRIBUTE_TOKEN = 'authenticatedUserToken';

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = !!sessionStorage.getItem(
      this.USER_NAME_SESSION_ATTRIBUTE_TOKEN
    );
  }

  get authStatus(): boolean {
    return this.isUserLoggedIn;
  }

  // tslint:disable-next-line:typedef
  authService(username: string, password: string) {
    let basicAuthToken = this.createBasicAuthToken(username, password);
    return this.http
      .get(API_ROOT, {
        headers: {
          authorization: this.createBasicAuthToken(username, password),
        },
      })
      .pipe(
        map((res) => {
          this.registerSuccessfulLogin(basicAuthToken, username);
        })
      );
  }
  createBasicAuthToken(username: string, password: string): string {
    return 'Basic ' + window.btoa(`${username}:${password}`);
  }

  registerSuccessfulLogin(basicAuthToken, username : string): void {
    sessionStorage.setItem(
      this.USER_NAME_SESSION_ATTRIBUTE_TOKEN,
      basicAuthToken
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_TOKEN);
    this.isUserLoggedIn = false;
  }

  isLoggedIn(): boolean {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_TOKEN);
    return user !== null;
  }

  getLoggedInUserName(): any {
    var usernameForView = atob(
      sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_TOKEN).substr(6)
    );
    if (usernameForView.split(':')[0] === null) {
      return '';
    }
    return usernameForView.split(':')[0];
  }

  createUser(user: object): Observable<object> {
    return this.http.post(POST_AUTHENTICATED, user);
  }
}
