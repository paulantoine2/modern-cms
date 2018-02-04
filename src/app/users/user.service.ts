import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class UserService {
  private url = 'http://localhost:3000/api/users/';
  private token = '';

  constructor(private http: HttpClient, private cookies: CookieService) {
    if (cookies.get('user_token')) {
      this.token = '?access_token=' + cookies.get('user_token');
    }
  }

  getAll() {
    return this.http.get<User[]>(this.url + this.token);
  }

  getById(id: string) {
    return this.http.get(this.url + id + this.token);
  }

  create(user: User) {
    return this.http.post(this.url + this.token, user);
  }

  update(user: User) {
    return this.http.put(this.url + user.id + this.token, user);
  }

  delete(id: number) {
    return this.http.delete(this.url + id + this.token);
  }
}
