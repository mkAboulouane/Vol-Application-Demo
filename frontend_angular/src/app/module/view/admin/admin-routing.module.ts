import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/guard/auth.guard';
import {Role} from 'src/app/core/models/role';


const routes: Routes = [

      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },      
{
        path: 'passager',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/passager/passager-module').then((m) => m.PassagerModule),
      },

      
{
        path: 'billet',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/billet/billet-module').then((m) => m.BilletModule),
      },

      
{
        path: 'siege',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/siege/siege-module').then((m) => m.SiegeModule),
      },

      
{
        path: 'avion',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/avion/avion-module').then((m) => m.AvionModule),
      },

      
{
        path: 'vol',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/vol/vol-module').then((m) => m.VolModule),
      },

      
{
        path: 'pilote',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/pilote/pilote-module').then((m) => m.PiloteModule),
      },

      
{
        path: 'compagnie',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/compagnie/compagnie-module').then((m) => m.CompagnieModule),
      },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
