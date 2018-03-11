import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from '../app-routing.module';
import { DirectiveModule } from '../directives/directive.module';
import { MapComponent } from '../directives/map/map.component';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    DirectiveModule
  ],
  declarations: [DashboardComponent]
})
export class HomeModule {

}
