//import {ServiceWorkerModule} from '@angular/service-worker';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {fakeBackendProvider} from './core/interceptor/fake-backend';
import {ErrorInterceptor} from './core/interceptor/error.interceptor';
import {JwtInterceptor} from './core/interceptor/jwt.interceptor';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ComponentsModule} from './module/view/shared/components/components.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ClickOutsideModule} from 'ng-click-outside';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {SharedModule} from './module/view/shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CoreModule} from 'src/app/core/core.module';
import {HeaderComponent} from './module/view/layout/header/header.component';
import {PageLoaderComponent} from './module/view/layout/page-loader/page-loader.component';
import {SidebarComponent} from './module/view/layout/sidebar/sidebar.component';
import {RightSidebarComponent} from './module/view/layout/right-sidebar/right-sidebar.component';
import {AuthLayoutComponent} from './module/view/layout/app-layout/auth-layout/auth-layout.component';
import {MainLayoutComponent} from './module/view/layout/app-layout/main-layout/main-layout.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageLoaderComponent,
    SidebarComponent,
    RightSidebarComponent,
    AuthLayoutComponent,
    MainLayoutComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatIconModule,
    MatButtonModule,
    ComponentsModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
},
}),
    LoadingBarRouterModule,
    // core & shared
    CoreModule,
    SharedModule,
    NgxDatatableModule,
    ComponentsModule,
    MatSelectModule,
    //ServiceWorkerModule.register('ngsw-worker.js', {
      //enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      //registrationStrategy: 'registerWhenStable:30000'
    //}),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}