import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes, Router} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PayrollComponent } from './payroll/payroll.component';
import { TeamComponent } from './team/team.component';
import { HolidayComponent } from './holiday/holiday.component';
export const myroute:Routes=[
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
{path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"**",component:UserComponent}]
export const myroute1:Routes=[
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"login/user",component:UserComponent},
{path:"login/admin",component:AdminComponent},
 {path:"**",component:ErrorComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(myroute),
    RouterModule.forRoot(myroute1)
  ],
  exports:[
    RouterModule
  ]
})
export class FlatrouteModule { }
