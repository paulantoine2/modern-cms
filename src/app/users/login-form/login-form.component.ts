import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie';
import * as moment from 'moment';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error: string;

  constructor(private authService: AuthService,
              public progress: NgProgress) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.error = null;
    this.progress.start();
    this.authService.login(username, password).subscribe(
      data => {
        this.progress.done();
      },
      error => {
        this.progress.done();
        const type = error.error.code;
        switch (type) {
          case 'USERNAME_EMAIL_REQUIRED':
            this.error = `Nom d'utilisateur / Mot de passe requis.`;
            break;
          case 'LOGIN_FAILED':
            this.error = `Mauvais identifiants.`;
            break;
          case 'LOGIN_FAILED_EMAIL_NOT_VERIFIED':
            this.error = `Votre compte n'est pas actif. Veuillez consulter vos emails afin de confirmer votre inscription.`;
            break;
        }
      }
    );

  }

}
