import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Schemas from '../schemas.json';
import { HttpClient } from '@angular/common/http';
import { ContentService } from '../content.service';
import { Content } from '../content.model';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ContentService]
})
export class ContentFormComponent implements OnInit {

  fields = [];
  contentId: string;
  content: Content;
  title: string;
  loaded = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private Contents: ContentService) {
  }

  ngOnInit() {
    const mode = this.route.snapshot.url[1].path;
    const contentType = this.route.snapshot.params.type;
    const schema = (<any>Schemas).find(
      (type) => type.id === contentType
    );
    const fields = schema.fields.slice();

    switch (mode) {
      case 'add':
        this.title = 'Ajouter un ' + schema.name;
        this.content = this.Contents.newContent();
        this.fields = fields;
        this.loaded = true;
        break;
      case 'edit':
        this.title = 'Modifier un ' + schema.name;
        this.contentId = this.route.snapshot.params.id;
        this.Contents.loadContent(this.contentId).subscribe(
          (data) => {
            for (const field of fields) {
              field.defaultValue = data.fields[field.id];
            }
            this.content = data;
            this.fields = fields;
          },
          (error) => {
          },
          () => {
            this.loaded = true;
          }
        );
        break;
    }
  }

  saveContent() {
    this.Contents.saveContent().subscribe(
      null,
      null,
      () => {
        this.router.navigate(['content']);
      }
    );
  }
}
