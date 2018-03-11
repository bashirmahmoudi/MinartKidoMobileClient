import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class AuthService {

  private _isLoggedIn = false;
  private _redirectUrl: string;

  public get IsLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public get RedirectUrl(): string {
    return this._redirectUrl;
  }

  public set RedirectUrl(url: string) {
    this._redirectUrl = url;
  }

  public login(userName: string, password: string, rememberMe: boolean, data?: any): Observable<boolean> {

    // TODO: add real mechanism
    if (userName.toLowerCase() === 'admin' && password.toLowerCase() === '1') {
        return Observable.of(true).delay(1000).do(val => {
          this._isLoggedIn = val;
        });
    }

    return new ErrorObservable('Username or password is wrong');
  }

  public logout(): void {
    this._isLoggedIn = false;
  }

}
