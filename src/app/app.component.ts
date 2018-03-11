import { Component, OnInit, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import { ElementRef } from '@angular/core';
import { LocalNotificationService } from './services/local-notification.service';
import { DialogsService } from './services/dialogs.service';
import { IMenuItem } from './directives/menu/menu-item';
import { SidebarComponent } from './directives/menu/sidebar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [LocalNotificationService]
})
export class AppComponent implements OnInit {

  private _sideBarMenuItems: Array<IMenuItem>;

  public get SidebarItems(): Array<IMenuItem> {
    return this._sideBarMenuItems;
  }

  @ViewChild('mainSidebar')
  private _mainMenu: SidebarComponent;

  @ViewChild('overlay')
  private _overlay: ElementRef;

  constructor(private localNotification: LocalNotificationService,
              private dialog: DialogsService) {
    this.createMenu();
  }

  createMenu(): void {
    this._sideBarMenuItems = [
      {
        id: 'h1',
        display: 'Dummy Heading',
        type: 'header',
        state: 'inactive'
      },
      {
        id: 'home',
        display: 'Home',
        type: 'node',
        state: 'active',
        link: '#',
        isLinkAbsolute: true
      },
      {
        id: 'about',
        display: 'About',
        type: 'node',
        state: 'inactive',
        link: '#',
        isLinkAbsolute: true
      },
      {
        id: 'pages',
        display: 'Pages',
        type: 'node',
        state: 'inactive',
        link: '#',
        isLinkAbsolute: true,
        childs: [
          {
            id: 'page1',
            display: 'Page 1',
            type: 'node',
            state: 'inactive',
            link: '#',
            isLinkAbsolute: true
          },
          {
            id: 'page2',
            display: 'Page 2',
            type: 'node',
            state: 'inactive',
            link: '#',
            isLinkAbsolute: true
          },
          {
            id: 'page3',
            display: 'Page 3',
            type: 'node',
            state: 'inactive',
            link: '#',
            isLinkAbsolute: true
          }
        ]
      },
      {
        id: 'Portfolio',
        display: 'Portfolio',
        type: 'node',
        state: 'inactive',
        link: '#',
        isLinkAbsolute: true
      },
      {
        id: 'Contact',
        display: 'Contact',
        type: 'node',
        state: 'inactive',
        link: '#',
        isLinkAbsolute: true
      }
    ];
  }

  ngOnInit(): void {
    this.bindEvents();
    if (cordova.platformId === 'android') {
      window["StatusBar"].backgroundColorByHexString("#ca6e04");
      window["StatusBar"].styleLightContent();
      window["StatusBar"].styleBlackTranslucent();
      window["StatusBar"].styleBlackOpaque();
    }
  }

  bindEvents() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  }

  onDeviceReady() {
  }

  toggleButton() {
    if (this._mainMenu) {
      this._mainMenu.toggleButton();
      $(this._overlay.nativeElement).fadeIn();
      return;
    }

  console.log('can not find mainmenu');
  }

  dismiss() {
    if (this._mainMenu) {
      this._mainMenu.dismiss();
    }

    $(this._overlay.nativeElement).fadeOut();
  }

  menuDismissed(isDismissed: boolean) {
    $(this._overlay.nativeElement).fadeOut();
  }
}
