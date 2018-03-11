import { Injectable } from '@angular/core';

@Injectable()
export class SecurityUtilityService {

  public Encode(data: string, key?: string): string {
    return data;
  }

  public Decode(data: string, key?: string): string {
    return data;
  }

  public get PrivateKey(): string {
    return '';
  }

  public get PublicKey(): string {
    return '';
  }
}
