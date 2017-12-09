import { Component, Input, OnInit } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() field: Field;

  constructor() { }

  ngOnInit() {
  }

}
