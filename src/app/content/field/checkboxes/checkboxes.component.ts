import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '../field.interface';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {
  @Input() field: Field;
  @Output() update = new EventEmitter<{ field: string, value: string }>();
  constructor() { }

  ngOnInit() {
    if (this.field.defaultValue && !Array.isArray(this.field.defaultValue)) {
      console.warn('The default value associated with a "checkboxes" field must be an Array.');
    } else {
      this.field.defaultValue = [];
    }
  }

  onChange(input) {
    const values = this.field.defaultValue;
    if (Array.isArray(values)) {
      if (input.target.checked) {
        values.push(input.target.value);
      } else {
        for (const value of values) {
          if (value === input.target.value) {
            values.splice(values.indexOf(value), 1);
            return;
          }
        }
      }
    }
  }
}
