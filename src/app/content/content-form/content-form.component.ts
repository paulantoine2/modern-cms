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
        label: 'Email',
        suffix: '@gmail.com'
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
          },
          {
            label: 'Deuxieme',
            value: '2'
          }
        ]
      },
      {
        type: 'select',
        id: 'select',
        label: 'Test Select',
        defaultValue: '2',
        multiple: true,
        options: [
          {
            label: 'Premier',
            value: '1'
          },
          {
            label: 'Deuxieme',
            value: '2'
          }
        ]
      },
      {
        type: 'checkboxes',
        id: 'select',
        label: 'Test checkboxes',
        defaultValue: '2',
        options: [
          {
            label: 'Premier',
            value: '1'
          },
          {
            label: 'Deuxieme',
            value: '2'
          }
        ]
      },
    ];
  }

  ngOnInit() {
  }

}
