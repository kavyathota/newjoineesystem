import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  username:string;
  password:string;
  status:string;
  show:boolean=false;
  Login(pUsername:string,pPassword:string)
  {
  if(pUsername=="admin" && pPassword=="root")
  {
    this.status="login successful";
    this.router.navigate(["/main/logged"]);
  }
  else
  {
    this.status="login unsuccessful";
  }
}
  ngOnInit() {
  }

}
