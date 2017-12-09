import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentFormComponent } from './content-form/content-form.component';
import { TextFieldComponent } from './field/text-field/text-field.component';
import { EmailComponent } from './field/email/email.component';
import { CheckboxComponent } from './field/checkbox/checkbox.component';
import { RadiosComponent } from './field/radios/radios.component';
import { FieldComponent } from './field/field.component';
import { TextAreaComponent } from './field/text-area/text-area.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentAddListComponent } from './content-add-list/content-add-list.component';
import { CheckboxesComponent } from './field/checkboxes/checkboxes.component';
import { SelectComponent } from './field/select/select.component';

const contentRoutes: Routes = [
  {
    path: 'content',
    component: ContentListComponent
  },
  {
    path: 'content/add',
    component: ContentAddListComponent
  },
  {
    path: 'content/add/:type',
    component: ContentFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(contentRoutes)
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
  ],
  exports: [
    ContentFormComponent
  ]
})
export class ContentModule { }
