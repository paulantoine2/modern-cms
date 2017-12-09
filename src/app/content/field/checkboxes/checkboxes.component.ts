import { Component, Input, OnInit } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {
  @Input() field: Field;

  constructor() { }

  ngOnInit() {
  }

}
