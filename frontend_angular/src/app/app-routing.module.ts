import { Role } from './core/models/role';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthLayoutComponent } from 'src/app/module/view/layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from 'src/app/module/view/layout/app-layout/main-layout/main-layout.component';



const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'admin',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'client',
        canActivate: [AuthGuard],
        data: {
          role: Role.Client,
        },
        loadChildren: () =>
          import('src/app/module/view/client/client.module').then((m) => m.ClientModule),
      },
      {
        path: 'pilot',
        canActivate: [AuthGuard],
        data: {
          role: Role.Pilot,
        },
        loadChildren: () =>
          import('src/app/module/view/pilot/pilot.module').then((m) => m.PilotModule),
      },
    ],  },  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('src/app/module/view/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: '**', component: Page404Component },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}