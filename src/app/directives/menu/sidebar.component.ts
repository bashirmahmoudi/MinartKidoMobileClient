import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { IMenuItem } from './menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {

  @ViewChild('sidemenu')
  private _sidemenu: ElementRef;
  constructor() { }

  // tslint:disable-next-line:no-input-rename
  @Input()
  items: Array<IMenuItem>;

  @Output() dismissed = new EventEmitter<boolean>();

  public get MenuItems(): Array<IMenuItem> {
    return this.items;
  }

  toggleButton() {
    // open sidebar
    $(this._sidemenu.nativeElement).addClass('active');
    // fade in the overlay
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }

  dismiss() {
    $(this._sidemenu.nativeElement).removeClass('active');
    this.dismissed.emit(true);
  }
}
