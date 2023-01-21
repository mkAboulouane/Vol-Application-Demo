import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatTabsModule} from "@angular/material/tabs";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RightSidebarComponent} from "./right-sidebar/right-sidebar.component";
import {MainLayoutComponent} from "./app-layout/main-layout/main-layout.component";
import {HeaderComponent} from "./header/header.component";
import {FeatherIconsModule} from "../shared/components/feather-icons/feather-icons.module";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {AuthLayoutComponent} from "./app-layout/auth-layout/auth-layout.component";
import {PageLoaderComponent} from "./page-loader/page-loader.component";
import {LoadingBarRouterModule} from "@ngx-loading-bar/router";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    MatTabsModule,
    FeatherIconsModule,
    PerfectScrollbarModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatButtonModule,
    LoadingBarRouterModule
  ],
  declarations: [
    SidebarComponent,

    RightSidebarComponent,
    MainLayoutComponent,
    HeaderComponent,
    AuthLayoutComponent,
    PageLoaderComponent,
  ],
})
export class LayoutModule {
}
