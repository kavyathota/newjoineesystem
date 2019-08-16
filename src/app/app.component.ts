import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apptwo';
  Register:boolean=false;
  Login:boolean=false;
  Home:boolean=true;
  About:boolean=false;
  _home()
  {
    this.Home=true;
    this.Register=false;
    this.Login=false;
    this.About=false;
  }
  _register(){
    this.Home=false;
    this.Register=true;
    this.Login=false;
    this.About=false;
  }
  _login(){
    this.Home=false;
    this.Register=false;
    this.Login=true;
    this.About=false;
  }
  _about(){
    this.Home=false;
    this.Register=false;
    this.Login=false;
    this.About=true;
  }
}
