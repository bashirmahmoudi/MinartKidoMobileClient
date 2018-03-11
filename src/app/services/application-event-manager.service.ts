import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';

export interface IAndroidEventPendingResult {
  pluginServiceName: string;
  pluginStatus: "OK" | "No Result" | "Error" | "Class not found" | "Illegal access" | "Instantiation error" | "Malformed url" | "IO error" | "Invalid action" | "JSON erro" | string;
  result: any;
}

interface IAndroidEventResult extends Event {
  action?: "resume";
  pendingResult?: IAndroidEventPendingResult;
}

@Injectable()
export class ApplicationEventManagerService {

  private static _onPause: Array<Function> = new Array<Function>(0);
  private static _onResume: Array<Function> = new Array<Function>(0);
  private static _onBackButton: Array<Function> = new Array<Function>(0);
  private static _onMenuButton: Array<Function> = new Array<Function>(0);
  private static _onSearchButton: Array<Function> = new Array<Function>(0);
  private static _onStartcallButton: Array<Function> = new Array<Function>(0);
  private static _onEndcallButton: Array<Function> = new Array<Function>(0);
  private static _onVolumeDownButton: Array<Function> = new Array<Function>(0);
  private static _onVolumeUpButton: Array<Function> = new Array<Function>(0);

  constructor() {

  }

  public static OnStart(): void {
    document.addEventListener("pause", this.onPause, false);
    document.addEventListener("resume", this.onResume, false);
    document.addEventListener("active", this.onResume, false);
    document.addEventListener("backbutton", this.onBackButton, false);
    document.addEventListener("menubutton", this.onMenuButton, false);
    document.addEventListener("searchbutton", this.onSearchButton, false);
    document.addEventListener("startcallbutton", this.onStartCallButton, false);
    document.addEventListener("endcallbutton", this.onEndCallButton, false);
    document.addEventListener("volumedownbutton", this.onVolumeDownButton, false);
    document.addEventListener("volumeupbutton", this.onVolumeUpButton, false);
  }

  private static onPause(): void {
    let _onPauseString: string[] = [];
    let _onResumeString: string[] = [];
    let _onBackButtonString: string[] = [];
    let _onMenuButtonString: string[] = [];
    let _onSearchButtonString: string[] = [];
    let _onStartcallButtonString: string[] = [];
    let _onEndcallButtonString: string[] = [];
    let _onVolumeDownButtonString: string[] = [];
    let _onVolumeUpButtonString: string[] = [];

    ApplicationEventManagerService._onPause.forEach(res => {
      _onPauseString.push(UtilityService.Serialize(res));
    });

    ApplicationEventManagerService._onResume.forEach(res => {
      _onResumeString.push(UtilityService.Serialize(res));
    });
    ApplicationEventManagerService._onBackButton.forEach(res => {
      _onBackButtonString.push(UtilityService.Serialize(res));
    });
    ApplicationEventManagerService._onMenuButton.forEach(res => {
      _onMenuButtonString.push(UtilityService.Serialize(res));
    });
    ApplicationEventManagerService._onSearchButton.forEach(res => {
      _onSearchButtonString.push(UtilityService.Serialize(res));
    });
    ApplicationEventManagerService._onStartcallButton.forEach(res => {
      _onStartcallButtonString.push(UtilityService.Serialize(res));
    });
    ApplicationEventManagerService._onEndcallButton.forEach(res => {
      _onEndcallButtonString.push(UtilityService.Serialize(res));
    });
    ApplicationEventManagerService._onVolumeDownButton.forEach(res => {
      _onVolumeDownButtonString.push(UtilityService.Serialize(res));
    });
    ApplicationEventManagerService._onVolumeUpButton.forEach(res => {
      _onVolumeUpButtonString.push(UtilityService.Serialize(res));
    });

    window.localStorage.setItem("CordovaEventsPause", JSON.stringify(_onPauseString));
    window.localStorage.setItem("CordovaEventsResume", JSON.stringify(_onResumeString));
    window.localStorage.setItem("CordovaEventsBackButton", JSON.stringify(_onBackButtonString));
    window.localStorage.setItem("CordovaEventsMenuButton", JSON.stringify(_onMenuButtonString));
    window.localStorage.setItem("CordovaEventsSearchButton", JSON.stringify(_onSearchButtonString));
    window.localStorage.setItem("CordovaEventsStartcallButton", JSON.stringify(_onStartcallButtonString));
    window.localStorage.setItem("CordovaEventsEndcallButton", JSON.stringify(_onEndcallButtonString));
    window.localStorage.setItem("CordovaEventsVolumeDownButton", JSON.stringify(_onVolumeDownButtonString));
    window.localStorage.setItem("CordovaEventsVolumeUpButton", JSON.stringify(_onVolumeUpButtonString));

    ApplicationEventManagerService._onPause.forEach((resolve) => {
      resolve();
    });
  }

  private static onResume(event: IAndroidEventResult): void {
    console.log('Hello from ONResume');
    if (typeof ApplicationEventManagerService._onPause === "undefined" || ApplicationEventManagerService._onPause.length === 0) {
      let onPause = window.localStorage.getItem("CordovaEventsPause");
      let onResume = window.localStorage.getItem("CordovaEventsResume");
      let onBackButton = window.localStorage.getItem("CordovaEventsBackButton");
      let onMenuButton = window.localStorage.getItem("CordovaEventsMenuButton");
      let onSearchButton = window.localStorage.getItem("CordovaEventsSearchButton");
      let onStartcallButton = window.localStorage.getItem("CordovaEventsStartcallButton");
      let onEndcallButton = window.localStorage.getItem("CordovaEventsEndcallButton");
      let onVolumeDownButton = window.localStorage.getItem("CordovaEventsVolumeDownButton");
      let onVolumeUpButton = window.localStorage.getItem("CordovaEventsVolumeUpButton");

      window.localStorage.removeItem('CordovaEventsPause');
      window.localStorage.removeItem('CordovaEventsResume');
      window.localStorage.removeItem('CordovaEventsBackButton');
      window.localStorage.removeItem('CordovaEventsMenuButton');
      window.localStorage.removeItem('CordovaEventsSearchButton');
      window.localStorage.removeItem('CordovaEventsStartcallButton');
      window.localStorage.removeItem('CordovaEventsEndcallButton');
      window.localStorage.removeItem('CordovaEventsVolumeDownButton');
      window.localStorage.removeItem('CordovaEventsVolumeUpButton');

      console.log(onResume);
      let _onPauseString: string[] = onPause ? JSON.parse(onPause) : new Array<Function>(0);
      let _onResumeString: string[] = onResume ? JSON.parse(onResume) : new Array<Function>(0);
      let _onBackButtonString: string[] = onBackButton ? JSON.parse(onBackButton) : new Array<Function>(0);
      let _onMenuButtonString: string[] = onMenuButton ? JSON.parse(onMenuButton) : new Array<Function>(0);
      let _onSearchButtonString: string[] = onSearchButton ? JSON.parse(onSearchButton) : new Array<Function>(0);
      let _onStartcallButtonString: string[] = onStartcallButton ? JSON.parse(onStartcallButton) : new Array<Function>(0);
      let _onEndcallButtonString: string[] = onEndcallButton ? JSON.parse(onEndcallButton) : new Array<Function>(0);
      let _onVolumeDownButtonString: string[] = onVolumeDownButton ? JSON.parse(onVolumeDownButton) : new Array<Function>(0);
      let _onVolumeUpButtonString: string[] = onVolumeUpButton ? JSON.parse(onVolumeUpButton) : new Array<Function>(0);

      console.log(_onResumeString.length);

      ApplicationEventManagerService._onPause = [];
      ApplicationEventManagerService._onResume = [];
      ApplicationEventManagerService._onBackButton = [];
      ApplicationEventManagerService._onMenuButton = [];
      ApplicationEventManagerService._onSearchButton = [];
      ApplicationEventManagerService._onStartcallButton = [];
      ApplicationEventManagerService._onEndcallButton = [];
      ApplicationEventManagerService._onVolumeDownButton = [];
      ApplicationEventManagerService._onVolumeUpButton = [];

      _onPauseString.forEach(res => {
        ApplicationEventManagerService._onPause.push(UtilityService.Deserialize(res));
      });
      _onResumeString.forEach(res => {
        ApplicationEventManagerService._onResume.push(UtilityService.Deserialize(res));
      });
      _onBackButtonString.forEach(res => {
        ApplicationEventManagerService._onBackButton.push(UtilityService.Deserialize(res));
      });
      _onMenuButtonString.forEach(res => {
        ApplicationEventManagerService._onMenuButton.push(UtilityService.Deserialize(res));
      });
      _onSearchButtonString.forEach(res => {
        ApplicationEventManagerService._onSearchButton.push(UtilityService.Deserialize(res));
      });
      _onStartcallButtonString.forEach(res => {
        ApplicationEventManagerService._onStartcallButton.push(UtilityService.Deserialize(res));
      });
      _onEndcallButtonString.forEach(res => {
        ApplicationEventManagerService._onEndcallButton.push(UtilityService.Deserialize(res));
      });
      _onVolumeDownButtonString.forEach(res => {
        ApplicationEventManagerService._onVolumeDownButton.push(UtilityService.Deserialize(res));
      });
      _onVolumeUpButtonString.forEach(res => {
        ApplicationEventManagerService._onVolumeUpButton.push(UtilityService.Deserialize(res));
      });
    }

    let result: IAndroidEventPendingResult = event.pendingResult;
    setTimeout(() => {
      ApplicationEventManagerService._onResume.forEach(resolve => {
        resolve(result);
      });
    }, 0);
  }

  private static onBackButton(): void {
    ApplicationEventManagerService._onBackButton.forEach(resolve => {
      resolve();
    });
  }

  private static onMenuButton(): void {
    ApplicationEventManagerService._onMenuButton.forEach(resolve => {
      resolve();
    });
  }

  private static onSearchButton(): void {
    ApplicationEventManagerService._onSearchButton.forEach(resolve => {
      resolve();
    });
  }

  private static onStartCallButton(): void {
    ApplicationEventManagerService._onStartcallButton.forEach(resolve => {
      resolve();
    });
  }

  private static onEndCallButton(): void {
    ApplicationEventManagerService._onEndcallButton.forEach(resolve => {
      resolve();
    });
  }

  private static onVolumeDownButton(): void {
    ApplicationEventManagerService._onVolumeDownButton.forEach(resolve => {
      resolve();
    });
  }

  private static onVolumeUpButton(): void {
    ApplicationEventManagerService._onVolumeUpButton.forEach(resolve => {
      resolve();
    });
  }

  public static Pause(callback: () => void): void {
    ApplicationEventManagerService._onPause.push(callback);
  }

  public static Resume(callback: (s: IAndroidEventPendingResult) => void): void {
    ApplicationEventManagerService._onResume.push(callback);
  }

  public static BackButton(callback: () => void): void {
    ApplicationEventManagerService._onBackButton.push(callback);
  }

  public static MenuButton(callback: () => void): void {
    ApplicationEventManagerService._onMenuButton.push(callback);
  }

  public static SearchButton(callback: () => void): void {
    ApplicationEventManagerService._onSearchButton.push(callback);
  }

  public static StartCallButton(callback: () => void): void {
    ApplicationEventManagerService._onStartcallButton.push(callback);
  }

  public static EndCallButton(callback: () => void): void {
    ApplicationEventManagerService._onEndcallButton.push(callback);
  }

  public static VolumeDownButton(callback: () => void): void {
    ApplicationEventManagerService._onVolumeDownButton.push(callback);
  }

  public static VolumeUpButton(callback: () => void): void {
    ApplicationEventManagerService._onVolumeUpButton.push(callback);
  }
}
