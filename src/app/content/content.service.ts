import { HttpClient } from '@angular/common/http';
import { Content } from './content.model';
import { EventEmitter, Injectable } from '@angular/core';
import { NotificationsService } from '../notifications/notifications.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class ContentService {
  private url = 'http://localhost:3000/api/contents/';
  private contentLoaded: Content;

  constructor(private http: HttpClient, private Notifications: NotificationsService) {
  }

  loadContent(id: string): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.http.get<any>(this.url + id).subscribe(
        (data) => {
          this.contentLoaded = data;
          observer.next(data);
        },
        (error) => {
          observer.error(error);
        },
        () => {
          observer.complete();
        }
      );
    });
  }

  unloadContent() {
    this.contentLoaded = null;
  }

  getContent() {
    return this.contentLoaded;
  }

  newContent() {
    this.contentLoaded = new Content();
    return this.contentLoaded;
  }

  saveContent(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.http.put(this.url + this.contentLoaded.id, this.contentLoaded).subscribe(
        null,
        (error) => {
          this.Notifications.add({message: `Erreur de mise a jour.`, style: 'danger'});
          observer.error(error);
        },
        () => {
          this.Notifications.add({
            message: `Le contenu <em>${this.contentLoaded.title}</em> à été mis à jour.`,
            style: 'success'
          });
          observer.complete();
        }
      );
    });
  }

  updateField(data: { field: string, value: string }) {
    if (this.contentLoaded[data.field]) {
      this.contentLoaded[data.field] = data.value;
    } else {
      this.contentLoaded.fields[data.field] = data.value;
    }
  }

}
