import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { SiegeAddComponent } from './siege-add/siege-add.component';
import { SiegeEditComponent } from './siege-edit/siege-edit.component';
import { SiegeListComponent } from './siege-list/siege-list.component';
import { SiegeViewComponent } from './siege-view/siege-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: SiegeListComponent,
  },
  {
    path: 'add',
    component: SiegeAddComponent,
  },
  {
    path: 'edit',
    component: SiegeEditComponent,
  },
  {
    path: 'view',
    component: SiegeViewComponent,
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
export class SiegeRoutingModule {}