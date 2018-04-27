import { Component } from '@angular/core';
import { MinartContext } from './core/minart-context';

@Component({
  selector: 'minart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(minartContext: MinartContext) {
    const s = minartContext.SecurityContext.CurrentUser;
    console.log('current user: ' + s);
  }
}
