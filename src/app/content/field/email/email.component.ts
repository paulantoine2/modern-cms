import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Input() field: Field;
  @Output() update = new EventEmitter<{ field: string, value: string }>();
  constructor() {}

  onChange(input) {
    this.update.emit({field: this.field.id, value: input.target.value});
  }
}
