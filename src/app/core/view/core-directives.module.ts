import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarConfigInterface,
         PerfectScrollbarComponent,
         PerfectScrollbarModule,
         PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SidebarComponent } from './sidebar/sidebar.component';

const DEFUALT_PERFERCT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  swipeEasing: true,
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFUALT_PERFERCT_SCROLLBAR_CONFIG
    }
  ]
})
export class CoreDirectivesModule { }
