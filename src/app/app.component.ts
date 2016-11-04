import { Component } from '@angular/core';
import {Auth} from "./auth/auth.service";
import {AppLayout} from "./app.layout";
import {Event as RouterEvent, Router, NavigationStart, NavigationEnd} from "@angular/router";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

declare var App:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading:boolean = false;

  constructor(
      private layout:AppLayout,
      private auth:Auth,
      private router:Router,
      private slimLoadingBarService:SlimLoadingBarService
  ){}

  ngOnInit() {

    App.init();
    this.router.events.subscribe((event: RouterEvent): void => {
      this.navigationInterceptor(event);
    });

    // setTimeout(() => {
    //   this.loading = false;
    // }, 5000);
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // console.log("NavigationStart")
      this.slimLoadingBarService.start(()=>{
        console.log('Loading Complete');
      });
    }
    if (event instanceof NavigationEnd) {

      $( 'html, body' ).animate({ scrollTop: 0 }, 0);

      this.slimLoadingBarService.complete();
      // console.log("NavigationEnd")
    }
    // Additionally there's NavigationCancel and NavigationError
  }
}
