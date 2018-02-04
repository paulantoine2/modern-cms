import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  @Input() field: Field;
  @Output() update = new EventEmitter<{ field: string, value: string }>();

  constructor() {
  }

  onChange(input) {
    this.update.emit({field: this.field.id, value: input});
  }

}
