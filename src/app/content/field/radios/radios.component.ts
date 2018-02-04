import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent {
  @Input() field: Field;
  @Output() update = new EventEmitter<{ field: string, value: string }>();
  constructor() {}

  onChange(input) {
    this.update.emit({field: this.field.id, value: input.target.value});
  }
}
