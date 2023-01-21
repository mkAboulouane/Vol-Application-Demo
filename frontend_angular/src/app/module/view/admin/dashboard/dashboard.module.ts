import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { MainComponent } from "./main/main.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgApexchartsModule } from "ng-apexcharts";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MatSelectModule} from "@angular/material/select";
import {ComponentsModule} from "src/app/module/view/shared/components/components.module";
import {SharedModule} from "src/app/module/view/shared/shared.module";

@NgModule({
  declarations: [
    MainComponent,
    Dashboard2Component,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    chartjsModule,
    NgApexchartsModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    ComponentsModule,
    SharedModule,
    NgxDatatableModule,
    MatSelectModule,
  ],
})
export class DashboardModule {}
