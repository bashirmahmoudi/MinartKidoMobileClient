import { Injectable, Inject } from '@angular/core';
import { Utility } from './class/utility';
import { SettingManager } from './class/setting-manager';
import { DeviceInfo } from './class/device-info';
import { DialogeManager } from './class/dialoge-manager';
import { SecurityContext } from './managers/security-context';
import { IuserService } from './interface/iuser-service';
import { ISettingsLoader } from './interface/isettings-loader';
import { AppConfig, APP_CONFIG } from './class/AppConfig';

@Injectable()
export class MinartContext {
    private _utility: Utility;
    private _settings: SettingManager;
    private _deviceInfo: DeviceInfo;
    private _dialoge: DialogeManager;
    private _securityContext: SecurityContext;

    constructor(userService: IuserService, @Inject(APP_CONFIG) config: AppConfig) {
        this._utility = new Utility();
        this._settings = new SettingManager();
        this._deviceInfo = new DeviceInfo();
        this._securityContext = new SecurityContext(userService);
    }

    public get Utility(): Utility {
        return this._utility;
    }

    public get Configuration(): SettingManager {
        return this._settings;
    }

    public get DeviceInfo(): DeviceInfo {
        return this._deviceInfo;
    }

    public get Dialoge(): DialogeManager {
        return this._dialoge;
    }

    public get SecurityContext(): SecurityContext {
        return this._securityContext;
    }

    public OnStartup(userServiceProvider?: IuserService): void {
        // TODO: database settings loader
        this._settings.OnStartup(new Array<ISettingsLoader>());
    }
}

class SettingsLoader implements ISettingsLoader {
    public LoadSettings(context?: string): Promise < { [key: string]: string } > {
        return null;
    }
}
