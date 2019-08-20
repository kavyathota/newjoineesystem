import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, public http:HttpClient) { 
  }
  username:string;
  password:string;
  status:string;
  show:boolean=false;
  Login(pUsername:string,pPassword:string)
  {
    var found:boolean = false;
    this.http.get("http://localhost:3000/admins")
            .toPromise()
            .then(data => {
              for(let i in data) {
                if(data[i].username == pUsername && data[i].password == pPassword) found = true;
              }
              if(found) {
                this.status = "Logged in successfully";
                this.router.navigate(["/main/logged"]);
              } else {
                this.status = "Login unsuccessful";
              }
            })
            .catch(error => {
              this.status = "An error occurred";
            });
}
  ngOnInit() {
  }
}
