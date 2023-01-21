import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { VolAddComponent } from './vol-add/vol-add.component';
import { VolEditComponent } from './vol-edit/vol-edit.component';
import { VolListComponent } from './vol-list/vol-list.component';
import { VolViewComponent } from './vol-view/vol-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: VolListComponent,
  },
  {
    path: 'add',
    component: VolAddComponent,
  },
  {
    path: 'edit',
    component: VolEditComponent,
  },
  {
    path: 'view',
    component: VolViewComponent,
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
export class VolRoutingModule {}