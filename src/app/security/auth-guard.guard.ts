import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  /**
   *
   */
  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard#canActivate called');

    const url = state.url;

    return this.checkLogin(url);
  }

  private checkLogin(url: string): Observable<boolean> | Promise<boolean> | boolean {
    if ( this._authService.IsLoggedIn) {
      return true;
    }

    // Store the attempted URL for redirecting
    this._authService.RedirectUrl = url;

    // Navigate to the login page with extras
    this._router.navigate(['/login']);

    // return this._authService.login().toPromise<boolean>().then(val => {
    //   return this._authService.IsLoggedIn;
    // });
  }
}
