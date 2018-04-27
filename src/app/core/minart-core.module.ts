import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinartContext } from './minart-context';
import { IuserService } from './interface/iuser-service';
import { UserServices } from '../services/UserServices';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MinartContext
  ],
  exports: [
  ],
  declarations: []
})
export class MinartCoreModule { }
