import { NgModule, ModuleWithProviders, ClassProvider, Provider } from '@angular/core';
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
  static forRoot(userService: Provider, config: Provider): ModuleWithProviders {
    return {
      ngModule: MinartCoreModule,
      providers: [userService, config, MinartContext]
    };
  }
}
