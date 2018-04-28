import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreDirectivesModule } from './core/view/core-directives.module';
import { MinartCoreModule } from './core/minart-core.module';
import { UserServices } from './services/UserServices';
import { IuserService } from './core/interface/iuser-service';
import { MinartContext } from './core/minart-context';
import { AppConfig, APP_CONFIG } from './core/class/AppConfig';
import { HttpModule } from '@angular/http';
import { KidoConfiguration, KIDO_CONFIG } from './appclass/kido-configuration';

const s: AppConfig = {
  loginUrl: '/login'
};

const conf: KidoConfiguration = {
  loginServiceUrl: '/api/login'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CoreDirectivesModule,
    MinartCoreModule.forRoot({
      provide: IuserService,
      useClass: UserServices
    },
      {
        provide: APP_CONFIG,
        useValue: s
      })
  ],
  providers: [
    {
      provide: KIDO_CONFIG,
      useValue: conf
    },
    UserServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
