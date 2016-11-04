import { Component, OnInit } from '@angular/core';
import {Auth} from "./auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppLayout} from "../app.layout";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  rememberMe:boolean;
  logginIn:boolean;

  username:string;

  password:string;

  constructor(private auth:Auth, private router:Router, private layout:AppLayout) {}

  login():void{
    this.logginIn = true;
    this.auth.login(this.username, this.password);
  }

  ngOnInit() {
    this.layout.withNavbar = false;
    this.layout.withSidebar = false;
  }

}
