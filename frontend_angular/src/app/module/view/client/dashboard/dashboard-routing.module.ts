import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import {Page404Component} from "src/app/module/view/authentication/page404/page404.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full",
  },

  {
    path: "main",
    component: MainComponent,
  },
  {
    path: "dashboard2",
    component: Dashboard2Component,
  },

  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
