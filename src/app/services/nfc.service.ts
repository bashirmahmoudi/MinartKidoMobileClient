import { Injectable } from '@angular/core';
import { DeviceinfoService } from './deviceinfo.service';
import { SettingsService } from './settings.service';
import { SecurityUtilityService } from '../security/security-utility.service';

interface Nfc extends PhoneGapNfc.Nfc {
  beginSession(success?: () => void, failure?: (f: string) => void);
  invalidateSession(success?: () => void, failure?: (f: string) => void);
  addMimeTypeListener(mimeType: string, callback: (event: PhoneGapNfc.NdefTagEvent) => void, win?: () => void, fail?: () => void): void;
}

declare var nfc: Nfc;

@Injectable()
export class NfcService {

  private _isNfcAvailable = false;

  constructor(private _deviceInfo: DeviceinfoService, private _settings: SettingsService,
              private _securityUtil: SecurityUtilityService) { }

  public get IsNfcAvailable(): boolean {
    return this._isNfcAvailable;
  }

  public onStartup(): void {

  }

  public beginSession(): Promise<void> {
    if (!this._deviceInfo.IsIOS) {
      return Promise.resolve();
    }

    return this.enabled().then(() => {
      nfc.beginSession(() => {
        return;
      }, (err) => {
        throw new Error('cann\'t start nfc session \r\n' + err);
      });
    });
  }

  public invalidateSession(): Promise<void> {
    if (!this._deviceInfo.IsIOS) {
      return Promise.resolve();
    }

    return this.enabled().then(() => {
      nfc.invalidateSession(() => {
        return;
      }, (err) => {

        throw new Error('cann\'t start nfc session \r\n' + err);
      });
    });
  }

  public enabled(): Promise<void> {
    return new Promise((resolve, reject) => {
      nfc.enabled(() => {
        this._isNfcAvailable = true;
        resolve();
      }, (err) => {
        if (err === 'NO_NFC') {
          this._isNfcAvailable = false;
        }
        reject(err);
      });
    });
  }

  public share(data: any): Promise<void> {
    return this.beginSession()
      .then(() => {
        return this._settings.IsAvailable;
      })
      .then(() => {
        let dt = JSON.stringify(data);
        console.log('share: ' + dt);
        dt = this._securityUtil.Encode(dt);

        let message = [
          ndef.textRecord(this._securityUtil.PublicKey , 'en-US', nfc.stringToBytes('sk')),
          ndef.mimeMediaRecord(this._settings.NfcShareMime, nfc.stringToBytes(dt), nfc.stringToBytes('dt')),
          ndef.androidApplicationRecord(this._settings.AndroidPackageName)
        ];

        nfc.share(message, () => {
          return;
        }, (err?: string) => {
          throw new Error('can not share data \r\n' + err);
        });
      });

  }

  public unshare(): Promise<void> {
    return this.beginSession().then(() => {
      nfc.unshare(() => {
        return;
      }, (err?) => {
        throw new Error('Can not stop sharing \r\n ${err}');
      });
    });
  }

  public addTagDiscoveredListener(callback: (tag: PhoneGapNfc.Tag) => void): Promise<void> {
    return this.beginSession().then(() => {
      nfc.addTagDiscoveredListener((event) => {
        callback(event.tag);
      }, () => {
        return;
      }, (err?) => {
        throw new Error('Error discovering tag \r\n ${err}');
      });
    });
  }

  public removeDiscoveredListener(callback: (tag: PhoneGapNfc.Tag) => void): Promise<void> {
    return this.beginSession().then(() => {
      nfc.removeTagDiscoveredListener((event) => {
        callback(event.tag);
      }, () => {
        return;
      }, (err?) => {
        throw new Error('Error discovering tag \r\n ${err}');
      });
    });
  }

  public addMimeTypeListener(callback: (data: JSON) => void): Promise<void> {
    return this.beginSession()
               .then(this._settings.IsAvailable)
               .then(() => {
                 nfc.addMimeTypeListener(this._settings.NfcReadMime, (event) => {
                   let payload = nfc.bytesToString(event.tag.ndefMessage[1].payload);
                   let key = nfc.bytesToString(event.tag.ndefMessage[0].payload);

                   let dt = this._securityUtil.Decode(payload, key);

                   try {
                    let js = JSON.parse(dt);
                    callback(js);
                    return;
                   }catch (err) {
                     throw err;
                   }

                 });
               });
  }

  public removeMimeTypeListener(callback: (tag: PhoneGapNfc.Tag) => void): Promise<void> {
    return this.beginSession()
               .then(this._settings.IsAvailable)
               .then(() => {
                 nfc.removeMimeTypeListener(this._settings.NfcReadMime, (event) => {
                   callback(event.tag);
                 }, () => {
                   return;
                 }, (err?) => {
                   throw err;
                 });
               });
  }
}
