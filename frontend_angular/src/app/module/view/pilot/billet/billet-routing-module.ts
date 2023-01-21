import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { BilletAddComponent } from './billet-add/billet-add.component';
import { BilletEditComponent } from './billet-edit/billet-edit.component';
import { BilletListComponent } from './billet-list/billet-list.component';
import { BilletViewComponent } from './billet-view/billet-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: BilletListComponent,
  },
  {
    path: 'add',
    component: BilletAddComponent,
  },
  {
    path: 'edit',
    component: BilletEditComponent,
  },
  {
    path: 'view',
    component: BilletViewComponent,
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
export class BilletRoutingModule {}