import { Component, Input } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Input() field: Field;

  constructor() {}
}
