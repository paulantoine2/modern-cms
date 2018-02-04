import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  @Input() field: Field;
  @Output() update = new EventEmitter<{ field: string, value: string }>();
  constructor() {}

  onChange(input) {
    this.update.emit({field: this.field.id, value: input.target.value});
  }
}
