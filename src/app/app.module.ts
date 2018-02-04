import { BrowserModule } from '@angular/platform-browser';
import { CookieModule, CookieService } from 'ngx-cookie';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsService } from './notifications/notifications.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupFormComponent } from './users/signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './users/user.service';
import { AuthService } from './users/auth.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersListComponent,
    LoginFormComponent,
    NotificationsComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ContentModule,
    CookieModule.forRoot(),
    NgProgressModule.forRoot(),
    NgProgressRouterModule,
    NgProgressHttpClientModule
  ],
  providers: [
    NotificationsService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
