import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import { environment } from './environments/environment';
import { ViewEncapsulation } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('deviceready', () => {
  platformBrowserDynamic().bootstrapModule(AppModule, [
    {
      defaultEncapsulation: ViewEncapsulation.None
    }
  ]).catch(err => console.log(err));
}, false);

