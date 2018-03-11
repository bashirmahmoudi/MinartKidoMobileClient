import { Injectable } from '@angular/core';

@Injectable()
export class DeviceinfoService {

  public get CordovaVersion(): string {
    return device.cordova;
  }

  public get IsCordovaAvailable(): boolean {
    return device.available;
  }

  public get DeviceModel(): string {
    return device.model;
  }

  public get Platform(): string {
    return device.platform;
  }

  public get UUID(): string {
    return device.uuid;
  }

  public get PlatformVersion(): string {
    return device.version;
  }

  public get Manufacturer(): string {
    return device.manufacturer;
  }

  public get IsVirtual(): boolean {
    return device.isVirtual;
  }

  public get Serial(): string {
    return device.serial;
  }

  public get IsAndroid(): boolean {
    return this.Platform.toLowerCase() === 'android';
  }

  public get IsIOS(): boolean {
    return this.Platform.toLowerCase() === 'ios';
  }

  public get IsWindows(): boolean {
    return this.Platform.toLowerCase() === 'windows';
  }
}
