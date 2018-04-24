import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreDirectivesModule } from './core/view/core-directives.module';
import { MinartCoreModule } from './core/minart-core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreDirectivesModule,
    MinartCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
