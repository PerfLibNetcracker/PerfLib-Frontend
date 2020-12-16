import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isUserLoggedIn: boolean;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  public username: string;
  public password: string;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = (!!sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME));
  }

  get authStatus(): boolean {
    return this.isUserLoggedIn;
  }
  // tslint:disable-next-line:typedef
  authService(username: string, password: string) {
    return this.http.get('http://localhost:8081/api/service/authentication/authenticated/',
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map(() => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, password);
      this.isUserLoggedIn = true;
    }));
  }
  createBasicAuthToken(username: string, password: string): string {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, password): void {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }

  logout(): void {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
    this.isUserLoggedIn = false;
  }

  isLoggedIn(): boolean {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    return user !== null;
  }

  getLoggedInUserName(): any {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) { return ''; }
    return user;
  }

  createUser(user: object): Observable<object> {
    return this.http.post('http://localhost:8081/api/service/authentication/registration/', user);
  }
}
