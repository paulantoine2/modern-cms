import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentFormComponent } from './content-form/content-form.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentAddListComponent } from './content-add-list/content-add-list.component';

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
  },
  {
    path: 'content/edit/:type/:id',
    component: ContentFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(contentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContentRoutingModule {

}
