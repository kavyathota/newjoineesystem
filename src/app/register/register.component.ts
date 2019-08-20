import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  status:string;
  login(pUsername:string,pEmail:string,pPassword:string,pcPassword:string)
  {
  if(pPassword==pcPassword && pPassword!=null)
  {
    this.status="registration successful";
  }
  else
  {
    this.status="registration unsucessful";
  }
  }
  ngOnInit() {
  }

}
