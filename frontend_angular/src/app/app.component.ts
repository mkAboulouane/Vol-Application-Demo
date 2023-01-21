import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VolApplication'
  currentUrl: string;
  appName = environment.appName;

  constructor(public _router: Router, location: PlatformLocation) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        // location.onPopState(() => {
        //   window.location.reload();
        // });
        this.currentUrl = routerEvent.url.substring(
          routerEvent.url.lastIndexOf('/') + 1
        );
      }
      if (routerEvent instanceof NavigationEnd) {
      }
      window.scrollTo(0, 0);
    });
  }
;
}