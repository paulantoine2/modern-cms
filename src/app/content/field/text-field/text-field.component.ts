import { Component, Input } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent {
  @Input() field: Field;

  constructor() {}
}
