import { Injectable } from '@angular/core';

interface CategoryArray {
  [name: string]: CategoryAction;
}

interface CategoryAction {
  yes?: CategoryActionData;
  no?: CategoryActionData;
  maybe?: CategoryActionData;
}

interface CategoryActionData {
  callback: string;
  title: string;
  foreground: boolean;
  destructive: boolean;
}

interface LocalPushNotificationStatic extends PhonegapPluginPush.PushNotificationStatic {
  hasPermission(callback: (data: {
    isEnabled: boolean;
  }) => void): void;
}

declare var PushNotification: LocalPushNotificationStatic;

export interface IPushNotification {
  message: string;
  title: string;
  count: string;
  sound: string;
  image: string;
  launchArgs: string;
  additionalData: {
    [key: string]: any;
    foreground: boolean;
    coldstart: boolean;
    dismissed: boolean;
  };
}

@Injectable()
export class PushNotificationService {

  private _senderId: string;

  private _registrationId: string;

  private _push: PhonegapPluginPush.PushNotification;

  public get SenderId(): string {
    return this._senderId;
  }

  public get RegistrationId(): string {
    return this._registrationId;
  }

  public get Push(): PhonegapPluginPush.PushNotification {
    return this._push;
  }

  public onStart(senderId: string, options?: {
    icon?: string;
    iconColor?: string;
    sound?: boolean;
    vibrate?: boolean;
    clearBadge?: boolean;
    clearNotifications?: boolean;
    forceShow?: boolean;
    topics?: Array<any>;
    messageKey?: string;
    titleKey?: string;
    pushServiceURL?: string;
    applicationServerKey?: string;
    alert?: boolean;
    badge?: boolean;
    categories?: Object;
    fcmSandbox?: boolean;
  }): void {

    let android: {
      senderID: string;
      icon?: string;
      iconColor?: string;
      sound?: boolean;
      vibrate?: boolean;
      clearBadge?: boolean;
      clearNotifications?: boolean;
      forceShow?: boolean;
      topics?: Array<any>;
      messageKey?: string;
      titleKey?: string;
    } = {
        senderID: senderId
      };

    let ios: {
      alert?: string | boolean;
      badge?: string | boolean;
      sound?: string | boolean;
      clearBadge?: string | boolean;
      categories?: CategoryArray;
      fcmSandbox?: boolean;
      topics?: Array<any>;
      senderID?: string
    } = {};
    let browser: {
      pushServiceURL?: string;
      applicationServerKey?: string;
    } = {};

    if (options) {

      if (options.icon) {
        android.icon = options.icon;
      }

      if (options.iconColor) {
        android.iconColor = options.iconColor;
      }

      if (options.sound) {
        android.sound = options.sound;
      }

      if (options.vibrate) {
        android.vibrate = options.vibrate;
      }

      if (options.clearBadge) {
        android.clearBadge = options.clearBadge;
      }

      if (options.clearNotifications) {
        android.clearNotifications = options.clearNotifications;
      }

      if (options.forceShow) {
        android.forceShow = options.forceShow;
      }

      if (options.topics) {
        android.topics = options.topics;
      }

      if (options.messageKey) {
        android.messageKey = options.messageKey;
      }

      if (options.titleKey) {
        android.titleKey = options.titleKey;
      }

      // Browser
      if (options.pushServiceURL) {
        browser.pushServiceURL = options.pushServiceURL;
      }

      if (options.applicationServerKey) {
        browser.applicationServerKey = options.applicationServerKey;
      }

      // Ios
      if (options.alert) {
        ios.alert = options.alert;
      }

      if (options.badge) {
        ios.badge = options.badge;
      }

      if (options.sound) {
        ios.sound = options.sound;
      }

      if (options.clearBadge) {
        ios.clearBadge = options.clearBadge;
      }

      // TODO:
      // if (options.categories) {
      //   ios.categories = options.categories;
      // }

      if (options.fcmSandbox) {
        ios.fcmSandbox = options.fcmSandbox;
      }

      if (options.topics) {
        ios.topics = options.topics;
      }
    }



    if (window.PushNotification) {
      this._push = PushNotification.init({
        android: android,
        ios: ios
      });

      this._push.on('registration', (data) => {
        console.log(data.registrationId);
        this._registrationId = data.registrationId;
      });
    }
  }

  public hasPermission(callback: (has: boolean) => void) {

    if (window.PushNotification) {
      PushNotification.hasPermission((data) => {
        if (data.isEnabled) {
          callback(data.isEnabled);
        }
        callback(false);
      });
    }
  }

  public onNotification(callback: (data: IPushNotification) => void, errorCallback?: (errer: Error) => void) {

    if ( this._push ) {
      this._push.on('notification', (data) => {
        callback(<IPushNotification>data);
      });

      this._push.on('error', (err) => {
        if (errorCallback) {
          errorCallback(err);
        }
      });
    }
  }



}
