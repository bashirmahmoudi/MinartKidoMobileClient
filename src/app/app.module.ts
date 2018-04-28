import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreDirectivesModule } from './core/view/core-directives.module';
import { MinartCoreModule } from './core/minart-core.module';
import { UserServices } from './services/UserServices';
import { IuserService } from './core/interface/iuser-service';
import { MinartContext } from './core/minart-context';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreDirectivesModule,
    MinartCoreModule.forRoot(UserServices)
  ],
  providers: [
    UserServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
