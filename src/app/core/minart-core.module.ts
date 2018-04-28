import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinartContext } from './minart-context';
import { IuserService } from './interface/iuser-service';
import { UserServices } from '../services/UserServices';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [],
  declarations: []
})
export class MinartCoreModule {
  static forRoot(userService: new () => IuserService, config?:any): ModuleWithProviders {
    return {
      ngModule: MinartCoreModule,
      providers: [userService, MinartContext, {provide: 'config', useValue: config}]
    };
  }
}
