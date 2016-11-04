import { Component, OnInit } from '@angular/core';
import {Auth} from "../auth/auth.service";
import {AppLayout} from "../app.layout";

declare var App:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:Auth, private layout:AppLayout) { }

  ngOnInit() {
    this.layout.withNavbar = true;
    this.layout.withSidebar = true;
    // console.log(this.auth.userProfile);
    App.dashboard();
  }

}
