import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SidebarComponent } from './menu/sidebar.component';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar/dist/lib/perfect-scrollbar.module';
import { UserProfileComponent } from './User/user-profile.component';
import { MapComponent } from './map/map.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule
  ],
  exports: [
    SidebarComponent, MapComponent
  ],
  declarations: [SidebarComponent, UserProfileComponent, MapComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class DirectiveModule { }
