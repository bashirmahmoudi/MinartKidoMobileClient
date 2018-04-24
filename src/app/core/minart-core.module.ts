import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinartContext } from './minart-context';

export function startupServicesFactory(): Function {
  return () => {

  };
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MinartContext,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServicesFactory,
      deps: [
        MinartContext
      ],
      multi: true
    }
  ],
  exports: [
    MinartContext
  ],
  declarations: []
})
export class MinartCoreModule { }
