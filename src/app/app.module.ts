import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SecurityModule } from './security/security.module';
import { HomeModule } from './home/home.module';
import { NfcService } from './services/nfc.service';
import { SettingsService } from './services/settings.service';
import { DeviceinfoService } from './services/deviceinfo.service';
import { ApplicationEventManagerService } from './services/application-event-manager.service';
import { LocalNotificationService } from "./services/local-notification.service";
import { DialogsService } from "./services/dialogs.service";
import { SecurityUtilityService } from './security/security-utility.service';
import { UtilityService } from './services/utility.service';
import { PushNotificationService } from "./services/push-notification.service";
import { DirectiveModule } from './directives/directive.module';
import { ProfileService } from './services/profile.service';
import { FormsModule } from '@angular/forms';
import { NfcComponent } from './sections/nfc.component';

export function startupServicesFactory(settings: SettingsService, nfcservice: NfcService,
                                       event: ApplicationEventManagerService,
                                       localNotification: LocalNotificationService,
                                       pushNotification: PushNotificationService,
                                       ): Function {
  return () => {
    nfcservice.onStartup();
    settings.OnStartup();
    ApplicationEventManagerService.OnStart();
    localNotification.onStartup();
    pushNotification.onStart(settings.SenderId, {
      forceShow: true
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NfcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectiveModule,
    SecurityModule,
    HomeModule,
    FormsModule
  ],
  providers: [
    NfcService,
    SettingsService,
    DeviceinfoService,
    LocalNotificationService,
    DialogsService,
    SecurityUtilityService,
    ApplicationEventManagerService,
    UtilityService,
    PushNotificationService,
    ProfileService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServicesFactory,
      deps: [
        SettingsService,
        NfcService,
        ApplicationEventManagerService,
        LocalNotificationService,
        PushNotificationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {

}
