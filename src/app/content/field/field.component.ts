import { Component, Input, OnInit } from '@angular/core';
import { Field } from './field.interface';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() id: string;
  @Input() type: string;
  @Input() label = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() description = '';
  @Input() defaultValue = '';
  @Input() prefix = null;
  @Input() suffix = null;
  @Input() multiple: false;
  @Input() options = [];

  fieldData: Field;

  constructor(private Content: ContentService) {
  }

  ngOnInit() {
    this.fieldData = {
      id: this.id,
      label: this.label,
      required: this.required || false,
      disabled: this.disabled || false,
      description: this.description || '',
      defaultValue: this.defaultValue || null,
      prefix: this.prefix || null,
      suffix: this.suffix || null,
      multiple: this.multiple || false,
      options: this.options || []
    };
  }

  onUpdateData(data) {
    this.Content.updateField(data);
  }
}
