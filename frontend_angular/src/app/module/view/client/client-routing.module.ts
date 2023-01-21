import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/guard/auth.guard';
import {Role} from 'src/app/core/models/role';


const routes: Routes = [

      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: {
          role: Role.Client,
        },
        loadChildren: () =>
          import('src/app/module/view/client/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },      
{
        path: 'passager',
        canActivate: [AuthGuard],
        data: {
          role: Role.Client,
        },
        loadChildren: () =>
          import('src/app/module/view/client/passager/passager-module').then((m) => m.PassagerModule),
      },

      
{
        path: 'billet',
        canActivate: [AuthGuard],
        data: {
          role: Role.Client,
        },
        loadChildren: () =>
          import('src/app/module/view/client/billet/billet-module').then((m) => m.BilletModule),
      },

      
{
        path: 'siege',
        canActivate: [AuthGuard],
        data: {
          role: Role.Client,
        },
        loadChildren: () =>
          import('src/app/module/view/client/siege/siege-module').then((m) => m.SiegeModule),
      },

      
{
        path: 'avion',
        canActivate: [AuthGuard],
        data: {
          role: Role.Client,
        },
        loadChildren: () =>
          import('src/app/module/view/client/avion/avion-module').then((m) => m.AvionModule),
      },

      
{
        path: 'vol',
        canActivate: [AuthGuard],
        data: {
          role: Role.Client,
        },
        loadChildren: () =>
          import('src/app/module/view/client/vol/vol-module').then((m) => m.VolModule),
      },

      
{
        path: 'pilote',
        canActivate: [AuthGuard],
        data: {
          role: Role.Client,
        },
        loadChildren: () =>
          import('src/app/module/view/client/pilote/pilote-module').then((m) => m.PiloteModule),
      },

      
{
        path: 'compagnie',
        canActivate: [AuthGuard],
        data: {
          role: Role.Client,
        },
        loadChildren: () =>
          import('src/app/module/view/client/compagnie/compagnie-module').then((m) => m.CompagnieModule),
      },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
