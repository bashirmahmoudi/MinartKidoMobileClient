import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  private _is_loaded: boolean;
  private _defaults: {[key: string]: string } = {};
  private _constants: {[key: string]: string } = {};


  public get NfcReadMime(): string {
    return this._constants._nfc_read_mime;
  }

  public get NfcShareMime(): string {
    return this._constants._nfc_share_mime;
  }

  public get AndroidPackageName(): string {
    return this._constants._androidPackageName;
  }

  public get SenderId(): string {
    return this._constants._senderId;
  }

  public OnStartup(): void {
    this.LoadConstants()
        .then(this.LoadDefaults)
        .then(this.LoadSettings)
        .then(() => {
          this._is_loaded = true;
        });
  }

  public LoadSettings(): Promise<boolean> {
    return Promise.resolve(true);
  }

  public LoadDefaults(): Promise<boolean> {
    return Promise.resolve(true);
  }

  public LoadConstants(): Promise<boolean> {
    this._constants._nfc_read_mime = 'binary/rdt';
    this._constants._nfc_share_mime = 'binary/dt';
    this._constants._androidPackageName = 'com.minartco.mykondu';
    this._constants._senderId = '457453131702';
    return Promise.resolve(true);
  }

  public IsAvailable(): Promise<void> {
    if (this._is_loaded) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (this._is_loaded) {
          resolve();
        }else {
          reject('Loading settings not loaded in 5s');
        }
      }, 5000);
    });
  }
}
