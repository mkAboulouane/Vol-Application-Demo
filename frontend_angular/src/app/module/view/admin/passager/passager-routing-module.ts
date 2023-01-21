import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { PassagerAddComponent } from './passager-add/passager-add.component';
import { PassagerEditComponent } from './passager-edit/passager-edit.component';
import { PassagerListComponent } from './passager-list/passager-list.component';
import { PassagerViewComponent } from './passager-view/passager-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: PassagerListComponent,
  },
  {
    path: 'add',
    component: PassagerAddComponent,
  },
  {
    path: 'edit',
    component: PassagerEditComponent,
  },
  {
    path: 'view',
    component: PassagerViewComponent,
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
export class PassagerRoutingModule {}