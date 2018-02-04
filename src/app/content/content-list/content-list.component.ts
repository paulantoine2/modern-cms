///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Content } from '../content.model';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents = [];

  constructor(private http: HttpClient, public progress: NgProgress) {
  }

  ngOnInit() {
    this.http.get<Array<Content>>('http://localhost:3000/api/contents').subscribe(
      (data) => {
        for (const content of data) {
          content.createdAt = moment(content.createdAt).format('DD/MM/YYYY HH:mm');
        }
        this.contents = data;
      }
    );
  }

}
