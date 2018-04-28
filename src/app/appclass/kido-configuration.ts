import { InjectionToken } from '@angular/core';

export class KidoConfiguration {
  loginServiceUrl?: string;
}

export const KIDO_CONFIG = new InjectionToken<KidoConfiguration>('kido.config');
