import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { NotificationsService } from '../../notifications/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService,
              private Notifications: NotificationsService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.userService.create(form.value)
      .subscribe(
        data => {
          this.Notifications.add({
            message: `Inscription realisee avec succes.
          Un email viens de vous etre envoye pour confirmer votre inscription.`, style: 'success'
          });
          this.router.navigate(['/login']);
        },
        error => {
          this.Notifications.add({message: `Echec durant l'inscription.`, style: 'danger'});
        }
      );
  }

}
