import { Injectable } from '@angular/core';

@Injectable()
export class NotificationsService {
  private notifications = [];

  constructor() {
  }

  get() {
    return this.notifications;
  }

  add(data: { message: string, style: string }) {
    this.notifications.push(data);
    setTimeout(() => {
      this.notifications.splice(0, 1);
    }, 7000);
  }

  remove(index) {
    this.notifications.splice(index, 1);
  }

}
