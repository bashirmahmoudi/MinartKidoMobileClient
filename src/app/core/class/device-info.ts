export class DeviceInfo {
    public get CordovaVersion(): string {
        return device ? device.cordova : null;
    }

    public get IsCordovaAvailable(): boolean {
        return device ? device.available : null;
    }

    public get DeviceModel(): string {
        return device ? device.model : null;
    }

    public get Platform(): string {
        return device ? device.platform : null;
    }

    public get UUID(): string {
        return device ? device.uuid : null;
    }

    public get PlatformVersion(): string {
        return device ? device.version : null;
    }

    public get Manufacturer(): string {
        return device ? device.manufacturer : null;
    }

    public get IsVirtual(): boolean {
        return device ? device.isVirtual : null;
    }

    public get Serial(): string {
        return device ? device.serial : null;
    }

    public get IsAndroid(): boolean {
        return this.Platform ? this.Platform.toLowerCase() === 'android' : null;
    }

    public get IsIOS(): boolean {
        return this.Platform ? this.Platform.toLowerCase() === 'ios' : null;
    }

    public get IsWindows(): boolean {
        return this.Platform ? this.Platform.toLowerCase() === 'windows' : null;
    }

}
