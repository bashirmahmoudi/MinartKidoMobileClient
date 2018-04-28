import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MinartContext } from '../minart-context';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private _minartContext: MinartContext, private _router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._minartContext.SecurityContext.CurrentUser != null) {
      return true;
    }

    this._minartContext.SecurityContext.RedirectUrl = state.url;
    this._router.navigate([this._minartContext.SecurityContext.LoginUrl]);
  }
}
