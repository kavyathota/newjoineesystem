import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  username:string;
  password:string;
  status:string;
  show:boolean=false;
  Login(pUsername:string,pPassword:string)
  {
  if(pUsername=="admin" && pPassword=="root")
  {
    this.status="login successful";
    this.show=true;
  }
  else
  {
    this.status="login unsuccessful";
  this.show=false;
  }
}
  ngOnInit() {
  }

}
