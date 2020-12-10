import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface User {
  userID: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user: User = {userID: '123'};

  public loggedIn = new BehaviorSubject<boolean>(this.user != null);

  get getCurrentUser(): User {
    return this.user;
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) {
  }

  login(login: string, password: string): Observable<User> {
    return this.http.post<any>(`http://localhost:8080/api/auth/login`, {login, password},
      {headers: {responseType: 'application/json'}})
      .pipe(tap(user => {
        this.user = user;
        this.loggedIn.next(true);
        return user;
      }));
  }

  logout(): Observable<User> {
    this.loggedIn.next(false);
    this.user = null;
    return null;
    /*
    return this.http.post<any>(`http://localhost:8080/api/auth/login`,
      {headers: {responseType: 'application/json'}})
      .pipe(tap(user => {
        this.user = null;
        this.loggedIn.next(false);
        return null;
      }));
     */
  }
}
