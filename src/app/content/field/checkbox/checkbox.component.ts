import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() field: Field;
  @Output() update = new EventEmitter<{ field: string, value: string }>();
  constructor() { }

  onChange(input) {
    this.update.emit({field: this.field.id, value: input.target.checked});
  }
}
