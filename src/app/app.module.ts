import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlatrouteModule } from './flatroute.module';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PayrollComponent } from './payroll/payroll.component';
import { TeamComponent } from './team/team.component';
import { HolidayComponent } from './holiday/holiday.component';
import { MainComponent } from './main/main.component';
import { UnloggedComponent } from './unlogged/unlogged.component';
import { LoggedComponent } from './logged/logged.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    AdminComponent,
    PayrollComponent,
    TeamComponent,
    HolidayComponent,
    MainComponent,
    UnloggedComponent,
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    FlatrouteModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
