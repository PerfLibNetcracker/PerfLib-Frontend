import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class HttpinterceptorService implements HttpInterceptor {
  USER_NAME_SESSION_ATTRIBUTE_TOKEN : string;
  constructor(private authService: AuthService) {
    this.USER_NAME_SESSION_ATTRIBUTE_TOKEN = this.authService.USER_NAME_SESSION_ATTRIBUTE_TOKEN;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isLoggedIn() && req.url.indexOf('basicauth') === -1) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem(
            this.USER_NAME_SESSION_ATTRIBUTE_TOKEN
          ),
        }),
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
