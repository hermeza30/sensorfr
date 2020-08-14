import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  constructor(public _loginService:LoginService,public router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this._loginService.loginService().subscribe((res:any)=>{
      this.router.navigate(['/sensor']);
    });
  }
}
