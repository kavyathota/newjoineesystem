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
import { MainComponent } from './main/main.component';
import { LoggedComponent } from './logged/logged.component';
import { UnloggedComponent } from './unlogged/unlogged.component';
import { AdministrationComponent } from './administration/administration.component';

export const myroute:Routes=[
  {path:"",redirectTo:"/main/unlogged",pathMatch:'full'},
  {path:"main",component:MainComponent, children: [
    { path: "unlogged", component: UnloggedComponent, children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "about", component: AboutComponent },
      { path: "home", component: HomeComponent }
    ] },
    { path: "logged", component: UserComponent, children: [
      { path: "team", component: TeamComponent },
      { path: "holidays", component: HolidayComponent },
      { path: "payroll", component: PayrollComponent },
      { path: "administration", component: AdministrationComponent },
    ] }, 
    // { path: "login", component: LoginComponent },
    // { path: "register", component: RegisterComponent },
    // { path: "about", component: AboutComponent },
    // { path: "home", component: HomeComponent },
  ]},
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
