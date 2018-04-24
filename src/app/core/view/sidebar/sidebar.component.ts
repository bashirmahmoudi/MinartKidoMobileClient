import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { IMenuItem } from '../../viewmodel/imenu-item';

@Component({
  selector: 'minart-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidemenu')
  private _sidemenu: ElementRef;

  @Input()
  items: Array<IMenuItem>;

  @Output()
  dismissed = new EventEmitter<boolean>();

  public get MenuItems(): Array<IMenuItem> {
    return this.items;
  }

  constructor() { }

  ngOnInit() {
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
