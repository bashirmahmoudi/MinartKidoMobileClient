import {InjectionToken} from '@angular/core';
import { IuserService } from '../interface/iuser-service';

export class AppConfig {
    loginUrl?: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
