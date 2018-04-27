import { ISettingsLoader } from '../interface/isettings-loader';

export class SettingManager {
    private _is_loaded: boolean;
    private _settings: {[key: string]: string} = {};
    private _loader: Array<ISettingsLoader>;

    public get Loaders(): Array<ISettingsLoader> {
        return this._loader;
    }

    public set Loaders(loaders: Array<ISettingsLoader>) {
        this._loader = loaders;
    }

    public get IsLoaded(): boolean {
        return this._is_loaded;
    }

    private LoadSettings(loaders?: Array<ISettingsLoader>): Promise<{[key: string]: string}> {
        let promise = Promise.resolve<{ [key: string]: string }>({});
        for (let i = 0; i < loaders.length; i++) {
            promise = promise.then((settings) => {
                // tslint:disable-next-line:prefer-const
                let comSett: { [key: string]: string } = settings;
                return loaders[i].LoadSettings().then((set) => {
                    for (const key in set) {
                        if (set.hasOwnProperty(key)) {
                            comSett[key] = set[key];
                        }
                    }
                    return comSett;
                });
            });
        }
        return promise;
    }

    private LoadDefaults(): Promise<{[key: string]: string}> {
        return Promise.resolve({});
    }

    private LoadConstants(): Promise<{ [key: string]: string }> {
        return Promise.resolve({
            nfc_read_mime: 'binary/rdt',
            nfc_share_mime: 'binary/dt',
            androidPackageName: 'com.minartco.mykondu',
            senderId: '457453131702'
        });
    }

    public OnStartup(loaders: Array<ISettingsLoader>): void {
        const ldrs = loaders ? loaders : this._loader;
        this.LoadConstants()
            .then((settings) => {
                return this.LoadDefaults().then((set) => {
                    for (const key in set) {
                        if (set.hasOwnProperty(key)) {
                            settings[key] = set[key];
                        }
                    }
                    return settings;
                });
            })
            .then((settings) => {
                return this.LoadSettings(ldrs).then((set) => {
                    for (const key in set) {
                        if (set.hasOwnProperty(key)) {
                            settings[key] = set[key];
                        }
                    }
                    return settings;
                });
            })
            .then((sett) => {
                this._settings = sett;
                this._is_loaded = true;
            });
    }

    public IsAvailable(): Promise<boolean> {
        if (this._is_loaded) {
            return Promise.resolve(true);
        }

        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                if (this._is_loaded) {
                    resolve(true);
                } else {
                    reject('Loading settings not loaded in 50s');
                }
            }, 50000);
        });
    }

    public Get(key: string): string {
        return this._settings.hasOwnProperty(key) ? this._settings[key] : null;
    }

}
