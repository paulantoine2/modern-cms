import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent {
  @Input() field: Field;
  @Output() update = new EventEmitter<{ field: string, value: string }>();

  constructor() {}

  onChange(input) {
    this.update.emit({field: this.field.id, value: input.target.value});
  }
}
