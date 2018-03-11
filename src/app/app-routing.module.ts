import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';

import { AuthGuardGuard } from './security/auth-guard.guard';
import { AuthService } from './security/auth.service';

import { LoginComponent } from './security/login.component';
import { DashboardComponent } from './home/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuardGuard]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
   exports: [RouterModule] ,
   providers: [AuthGuardGuard, AuthService]
})
export class AppRoutingModule { }
