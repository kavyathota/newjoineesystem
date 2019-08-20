import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
show1:boolean=false;
show2:boolean=false;
show3:boolean=false;
  constructor() { }
fun1(){
  this.show1=true;
this.show2=false;
this.show3=false;
}
fun2(){
  this.show2=true;
this.show1=false;
this.show3=false;
}
fun3(){
  this.show3=true;
this.show2=false;
this.show1=false;
}
  ngOnInit() {
  }

}
