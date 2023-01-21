import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { PiloteAddComponent } from './pilote-add/pilote-add.component';
import { PiloteEditComponent } from './pilote-edit/pilote-edit.component';
import { PiloteListComponent } from './pilote-list/pilote-list.component';
import { PiloteViewComponent } from './pilote-view/pilote-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: PiloteListComponent,
  },
  {
    path: 'add',
    component: PiloteAddComponent,
  },
  {
    path: 'edit',
    component: PiloteEditComponent,
  },
  {
    path: 'view',
    component: PiloteViewComponent,
  },
  { 
    path: '**', 
    component: Page404Component,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiloteRoutingModule {}