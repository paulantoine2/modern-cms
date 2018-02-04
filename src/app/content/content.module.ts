import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentFormComponent } from './content-form/content-form.component';
import { TextFieldComponent } from './field/text-field/text-field.component';
import { EmailComponent } from './field/email/email.component';
import { CheckboxComponent } from './field/checkbox/checkbox.component';
import { RadiosComponent } from './field/radios/radios.component';
import { FieldComponent } from './field/field.component';
import { TextAreaComponent } from './field/text-area/text-area.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentAddListComponent } from './content-add-list/content-add-list.component';
import { CheckboxesComponent } from './field/checkboxes/checkboxes.component';
import { SelectComponent } from './field/select/select.component';
import { TextEditorComponent } from './field/text-editor/text-editor.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { ContentRoutingModule } from './content-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    ContentRoutingModule
  ],
  declarations: [
    ContentFormComponent,
    TextFieldComponent,
    EmailComponent,
    CheckboxComponent,
    RadiosComponent,
    FieldComponent,
    TextAreaComponent,
    ContentListComponent,
    ContentAddListComponent,
    CheckboxesComponent,
    SelectComponent,
    TextEditorComponent
  ],
  exports: [
    ContentFormComponent
  ]
})
export class ContentModule { }
