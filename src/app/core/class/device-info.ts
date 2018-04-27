export class DeviceInfo {
    public static get CordovaVersion(): string {
        return device ? device.cordova : null;
    }

    public static get IsCordovaAvailable(): boolean {
        return device ? device.available : null;
    }

    public static get DeviceModel(): string {
        return device ? device.model : null;
    }

    public static get Platform(): string {
        return device ? device.platform : null;
    }

    public static get UUID(): string {
        return device ? device.uuid : null;
    }

    public static get PlatformVersion(): string {
        return device ? device.version : null;
    }

    public static get Manufacturer(): string {
        return device ? device.manufacturer : null;
    }

    public static get IsVirtual(): boolean {
        return device ? device.isVirtual : null;
    }

    public static get Serial(): string {
        return device ? device.serial : null;
    }

    public  static get IsAndroid(): boolean {
        return this.Platform ? this.Platform.toLowerCase() === 'android' : null;
    }

    public  static get IsIOS(): boolean {
        return this.Platform ? this.Platform.toLowerCase() === 'ios' : null;
    }

    public static get IsWindows(): boolean {
        return this.Platform ? this.Platform.toLowerCase() === 'windows' : null;
    }

}
