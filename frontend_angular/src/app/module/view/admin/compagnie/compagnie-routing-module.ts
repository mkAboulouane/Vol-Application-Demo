import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { CompagnieAddComponent } from './compagnie-add/compagnie-add.component';
import { CompagnieEditComponent } from './compagnie-edit/compagnie-edit.component';
import { CompagnieListComponent } from './compagnie-list/compagnie-list.component';
import { CompagnieViewComponent } from './compagnie-view/compagnie-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: CompagnieListComponent,
  },
  {
    path: 'add',
    component: CompagnieAddComponent,
  },
  {
    path: 'edit',
    component: CompagnieEditComponent,
  },
  {
    path: 'view',
    component: CompagnieViewComponent,
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
export class CompagnieRoutingModule {}