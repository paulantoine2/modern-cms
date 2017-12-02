import { Component, Input } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  @Input() field: Field;
  constructor() {}
}
