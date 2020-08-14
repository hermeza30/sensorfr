import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(public _loginService:LoginService) { }

  ngOnInit(): void {
  }
  logout(){
    this._loginService.logout();
  }
}
