import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  animations: [
    trigger('fade', [
      state('in', style({opacity: '1'})),
      transition(':enter', [
        style({opacity: '0'}),
        animate(200)
      ]),
      transition(':leave', [
        animate(200, style({opacity: '0'}))
      ])
    ])
  ]
})
export class NotificationsComponent implements OnInit {
  notifications: { message: string, style: string }[];

  constructor(private Notifications: NotificationsService) {
  }

  ngOnInit() {
    this.notifications = this.Notifications.get();
  }

}
