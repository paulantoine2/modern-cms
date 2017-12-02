import { Component, Input } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent {
  @Input() field: Field;

  constructor() {}

}
