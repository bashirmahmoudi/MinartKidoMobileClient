import { Injectable } from '@angular/core';
import { Utility } from './class/utility';
import { SettingManager } from './class/setting-manager';

@Injectable()
export class MinartContext {
    private _utility: Utility;
    private _settings: SettingManager;

    constructor() {
        this._utility = new Utility();
        this._settings = new SettingManager();
    }

    public get Utility(): Utility {
        return this._utility;
    }

    public get Configuration(): SettingManager {
        return this._settings;
    }

    public OnStartup(): void {
        // TODO:
        this._settings.OnStartup();
    }
}
