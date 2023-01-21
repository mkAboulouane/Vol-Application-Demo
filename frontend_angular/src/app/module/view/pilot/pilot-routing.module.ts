import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/guard/auth.guard';
import {Role} from 'src/app/core/models/role';


const routes: Routes = [

      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: {
          role: Role.Pilot,
        },
        loadChildren: () =>
          import('src/app/module/view/pilot/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },      
{
        path: 'passager',
        canActivate: [AuthGuard],
        data: {
          role: Role.Pilot,
        },
        loadChildren: () =>
          import('src/app/module/view/pilot/passager/passager-module').then((m) => m.PassagerModule),
      },

      
{
        path: 'billet',
        canActivate: [AuthGuard],
        data: {
          role: Role.Pilot,
        },
        loadChildren: () =>
          import('src/app/module/view/pilot/billet/billet-module').then((m) => m.BilletModule),
      },

      
{
        path: 'siege',
        canActivate: [AuthGuard],
        data: {
          role: Role.Pilot,
        },
        loadChildren: () =>
          import('src/app/module/view/pilot/siege/siege-module').then((m) => m.SiegeModule),
      },

      
{
        path: 'avion',
        canActivate: [AuthGuard],
        data: {
          role: Role.Pilot,
        },
        loadChildren: () =>
          import('src/app/module/view/pilot/avion/avion-module').then((m) => m.AvionModule),
      },

      
{
        path: 'vol',
        canActivate: [AuthGuard],
        data: {
          role: Role.Pilot,
        },
        loadChildren: () =>
          import('src/app/module/view/pilot/vol/vol-module').then((m) => m.VolModule),
      },

      
{
        path: 'pilote',
        canActivate: [AuthGuard],
        data: {
          role: Role.Pilot,
        },
        loadChildren: () =>
          import('src/app/module/view/pilot/pilote/pilote-module').then((m) => m.PiloteModule),
      },

      
{
        path: 'compagnie',
        canActivate: [AuthGuard],
        data: {
          role: Role.Pilot,
        },
        loadChildren: () =>
          import('src/app/module/view/pilot/compagnie/compagnie-module').then((m) => m.CompagnieModule),
      },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilotRoutingModule {}
