import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { SignupFormComponent } from './users/signup-form/signup-form.component';


const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'signup', component: SignupFormComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
