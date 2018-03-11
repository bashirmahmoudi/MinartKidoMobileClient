import { Injectable, OnInit } from '@angular/core';
import { Data } from '@angular/router/src/config';
import { ApplicationEventManagerService, IAndroidEventPendingResult } from './application-event-manager.service';
import { UtilityService } from './utility.service';

interface INotification {
  id?: number;
  actionGroupId?: string;
  actions?: INotificationAction[] | INotificationActionInput[];
  attachments?: string[];
  autoClear?: boolean;
  badge?: number;
  channel?: string;
  color?: string;
  data?: { [key: string]: any };
  defaults?: number;
  foreground?: boolean;
  group?: string;
  groupSummary?: boolean;
  icon?: string;

  lauch?: boolean;
  led?: boolean | string | { color: string; on?: number; off?: number };
  lockscreen?: boolean;
  mediaSession?: string;
  number?: number;
  priority?: number;
  progressBar?: boolean | {
    value: number;
  };
  showWhen?: boolean | string;
  silent?: boolean;
  smallIcon?: string;
  sound?: boolean | string;
  sticky?: boolean;
  summary?: string;
  text?: string | [{ message: string; person?: string }];
  title?: string;
  trigger?: INotificationTriggerFix | INotificationTriggerLocation | INotificationTriggerMatch | INotificationTriggerRepeat | INotificationTriggerTimespan;
  vibrate?: boolean;
  wakeup?: string;
}
interface INotificationAction {
  id: string;
  title: string;
  launch?: string;
  ui?: string;
  needsAuth?: boolean;
  icon?: string;
}
interface INotificationActionInput extends INotificationAction {
  emptyText?: string;
  submitTitle?: string;
  editable?: boolean;
  choices?: [string];
  defaultValue?: string;
  type?: string;
}

interface INotificationTriggerFix {
  at: Date;
}

interface INotificationTriggerTimespan {
  in: number;
  unit: 'second' | 'minute' | 'houre' | 'day' | 'week' | 'month' | 'quarter' | 'year';
}

interface INotificationTriggerRepeat {
  count?: number;
  every?: 'minute'|'houre'|'day'|'week'|'month'|'quarter'|'year';
  before?: Date;
  firstAt?: Date;
}

interface INotificationTriggerMatch {
  count?: number;
  every?: {
    minute?: number;
    hour?: number;
    day?: number;
    weekday?: number;
    weekdayOrdinal?: number;
    week?: number;
    weekOfMonth?: number;
    month?: number;
    quarter?: number;
    year?: number;
  };
}

interface INotificationTriggerLocation {
  center: [number, number];
  radius: number;
  notifyOnEntry?: boolean;
  notifyOnExit?: boolean;
  single?: boolean;
}

interface ILocalNotification {


}

interface CordovaPluginLocal extends CordovaPlugins {
  notification: {
    local: {
      hasPermission(grantFunc: (granted: boolean) => void);
      registerPermission(grantFunc: (granted: boolean) => void);
      on(type: 'click' | 'cancel', res: (notification: INotification) => void);
      schedule(notification: INotification | INotification[]);
      getDefaults(): any;
    }
  };
}
interface CordovaLocal extends Cordova {
  plugins: CordovaPluginLocal;
}

declare var cordova: CordovaLocal;

export interface INotificationLocal extends INotification {
  id: number;
}

@Injectable()
export class LocalNotificationService {
  private static _notifications: {
    [key: string]: {
      notification: INotificationLocal;
      resolve?: Function;
    }
  } = {};

  private _hasPermission: boolean;
  private _shouldRequestPermission: boolean;
  private _lastId: number;


  constructor() {
    ApplicationEventManagerService.Pause(this.onPause);
    ApplicationEventManagerService.Resume(this.onResume);
  }

  public static optOutNotification(not: INotification): INotificationLocal {
    return <INotificationLocal>not;
  }

  public onStartup() {
    console.log('hello from Local On startup');
    cordova.plugins.notification.local.on('click', this.onClick);
  }


  private onPause() {
    let _notificationsString: {[key: string]: {
      notification: INotificationLocal;
      resolve?: string;
    }} = {};

    for (const key in LocalNotificationService._notifications) {
      if (LocalNotificationService._notifications.hasOwnProperty(key)) {
        const element = LocalNotificationService._notifications[key];
        _notificationsString[key] = {
          notification: element.notification,
          resolve: element.resolve ? UtilityService.Serialize(element.resolve) : null
        };
      }
    }

    window.localStorage.setItem('LocalNotificationService', JSON.stringify(_notificationsString));
  }

  private onResume(result: IAndroidEventPendingResult) {
    console.log(result);
    let notif = window.localStorage.getItem('LocalNotificationService');
    window.localStorage.removeItem('LocalNotificationService');
    if (!notif) {
    let _notificationsString: {
      [key: string]: {
        notification: INotificationLocal;
        resolve?: string;
      }
    } = JSON.parse(notif);

    for (const key in _notificationsString) {
      if (_notificationsString.hasOwnProperty(key)) {
        const element = _notificationsString[key];
        LocalNotificationService._notifications[key] = {
          notification: element.notification,
          resolve: element.resolve ? UtilityService.Deserialize(element.resolve) : () => {}
        };
      }
    }
  }

    // this.onStartup();
  }

  public onClick(notification: INotification) {
    console.log("Clicked");
    console.log(JSON.stringify(notification));
    if (LocalNotificationService._notifications[notification.id]) {
      LocalNotificationService._notifications[notification.id].resolve(LocalNotificationService.optOutNotification(notification));
    }
  }

  public async hasPermission(): Promise<boolean> {
    if (this._hasPermission) {
      return Promise.resolve(true);
    }

    return new Promise<boolean>((resolve, reject) => {
      cordova.plugins.notification.local.hasPermission((granted) => {
        this._hasPermission = granted;
        if (!granted) {
          this.requestPermission().then((gr) => {
            resolve(gr);
          }).catch((reason) => {
            reject('You have no permission to send notification');
          });
          return;
        }
        resolve(granted);
      });
    });

  }

  public async requestPermission(): Promise<boolean> {
    if (!this._shouldRequestPermission) {
      Promise.resolve(this._hasPermission);
    }

    return new Promise<boolean>((resolve, reject) => {
      cordova.plugins.notification.local.registerPermission((granted) => {
        this._hasPermission = granted;

        if (!granted) {
          reject('You have no permission to send notification');
          return;
        }

        resolve(granted);
      });
    });

  }

  public showTextNotification(notification: string): void {

  }

  public showNofification(notification: INotificationLocal, callback?: (notification: INotificationLocal) => void, error?: (error: string | Error) => void) {
    if (LocalNotificationService._notifications[notification.id]) {
      if (error) {
        error(`You have already added the notification ${notification.id}`);
        return;
      }
    }

    // console.log('I am from showNotification');

    LocalNotificationService._notifications[notification.id] = {
      notification: notification,
      resolve: callback
    };

    cordova.plugins.notification.local.schedule(notification);
  }

  public getDefaults(): any {
    return cordova.plugins.notification.local.getDefaults();
  }
}
