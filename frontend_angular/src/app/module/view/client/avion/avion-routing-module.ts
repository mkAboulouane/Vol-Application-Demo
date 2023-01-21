import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { AvionAddComponent } from './avion-add/avion-add.component';
import { AvionEditComponent } from './avion-edit/avion-edit.component';
import { AvionListComponent } from './avion-list/avion-list.component';
import { AvionViewComponent } from './avion-view/avion-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: AvionListComponent,
  },
  {
    path: 'add',
    component: AvionAddComponent,
  },
  {
    path: 'edit',
    component: AvionEditComponent,
  },
  {
    path: 'view',
    component: AvionViewComponent,
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
export class AvionRoutingModule {}