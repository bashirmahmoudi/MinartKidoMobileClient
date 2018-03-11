import { Component, Host, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { SidebarComponent } from '../directives/menu/sidebar.component';
import { ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { LocalNotificationService } from '../services/local-notification.service';
import { DialogsService } from '../services/dialogs.service';
import { PushNotificationService } from '../services/push-notification.service';
import { NfcService } from '../services/nfc.service';
import { MapState } from '../directives/map/map-state.enum';
import { MarkerObject } from '../directives/map/marker';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  providers: [LocalNotificationService, DialogsService]
})

export class DashboardComponent implements OnInit {

  private _shown = false;
  private _nfcMessage: string;
  private _mapUseMyLocation: boolean;
  private _mapState: MapState;


  public get nfcMessage(): string {
    return this._nfcMessage;
  }


  public set nfcMessage(v: string) {
    this._nfcMessage = v;
  }



  public get RegistrationId(): string {
    return this.pushNotification.RegistrationId;
  }

  constructor( @Host() private _parent: AppComponent,
               private localNotification: LocalNotificationService,
               private dialog: DialogsService,
               private pushNotification: PushNotificationService,
               private nfc: NfcService) {

    this._mapUseMyLocation = true;
    this._mapState = MapState.select;
  }

  showNotification() {
    // // console.log("hello 2");
    // // this.dialog.alert(JSON.stringify(this.localNotification.getDefaults()));
    // this.localNotification.showNofification({
    //   id: 15,
    //   title: 'Chat with Irish',
    //   icon: 'http://climberindonesia.com/assets/icon/ionicons-2.0.1/png/512/android-chat.png',
    //   text: [
    //     { message: 'I miss you' },
    //     { person: 'Irish', message: 'I miss you more!' },
    //     { message: 'I always miss you more by 10%' }
    //   ]
    // }, note => {
    //   this.dialog.alert(JSON.stringify(note));
    // }, reson => {
    //   console.log(reson);
    //   this.dialog.alert(reson.toString());
    // });
  }

  startNfc() {
    if (!this._shown) {
      this._shown = true;
    this.nfc.share({
      id: 2,
      name: this._nfcMessage
    }).then(() => {
      console.log('nfc Activated');
    }).catch((err) => {
      console.log('nfc Log: ' + err);
    });
  }
  }

  ngOnInit(): void {

    this.pushNotification.onNotification((data) => {
      this.dialog.alert(JSON.stringify(data));
    }, (err) => {
      this.dialog.alert(err.message);
    });
  }

  mapSelcted(marker: MarkerObject) {
    this.dialog.alert(`Your Location is \r\n lat:${marker.position.lat} \r\n lng:${marker.position.lng}`);
  }
}
