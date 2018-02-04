import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router) {
  }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', {username: username, password: password})
      .map(user => {
        if (user.id) {
          this.cookieService.put(
            'user_token',
            user.id,
            {expires: moment().add(1, 'y').toDate()}
          );
          this.cookieService.put(
            'user_id',
            user.userId,
            {expires: moment().add(1, 'y').toDate()}
          );
          localStorage.setItem(user.userId, JSON.stringify(user.user));
        }
        this.router.navigate(['']);
        return user;
      });
  }

  logout() {
    this.cookieService.remove('user_token');
    this.cookieService.remove('user_id');
    this.router.navigate(['login']);
  }

  isAuth() {
    return this.cookieService.get('user_id');
  }

  getUser() {
    const id = this.cookieService.get('user_id');
    return JSON.parse(localStorage.getItem(id));
  }
}
