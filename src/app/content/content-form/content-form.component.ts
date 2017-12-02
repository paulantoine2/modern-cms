import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentFormComponent implements OnInit {

  fields = [];

  constructor() {
    this.fields = [
      {
        type: 'email',
        id: 'email_input',
        label: 'Email'
      },
      {
        type: 'textarea',
        id: 'body',
        label: 'Corps de texte'
      },
      {
        type: 'radios',
        id: 'radios',
        label: 'Test radios',
        options: [
          {
            label: 'Premier',
            value: '1'
          }
        ]
      },
    ];
  }

  ngOnInit() {
  }

}
