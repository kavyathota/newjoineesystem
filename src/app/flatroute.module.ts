import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes, Router} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
export const myroute:Routes=[
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"**",component:ErrorComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(myroute)
  ],
  exports:[
    RouterModule
  ]
})
export class FlatrouteModule { }
