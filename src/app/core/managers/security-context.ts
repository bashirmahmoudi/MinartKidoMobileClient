import { User } from '../model/user';
import { Permission } from '../model/permission';
import { Role } from '../model/role';
import { IuserService } from '../interface/iuser-service';
import { RequestOptions, Headers } from '@angular/http';
import { Inject } from '@angular/core';

export class SecurityContext {
    private _userService: IuserService;
    private _currentUser: User;
    private _token: any;

    private _redirectUrl: string;

    constructor(userService: IuserService , private _loginUrl: string) {
        console.log(userService);
        this._userService = userService;
    }


    public get AuthenticationRequestOptions(): RequestOptions {
      const headers = new Headers({
        'Authorization': 'Bearer ' + this._token
      });
      return new RequestOptions({
        headers: headers
      });
    }

    /**
     * Current Login Identity
     */
    public get CurrentUser(): User {
        return this._currentUser;
    }

    public get RedirectUrl(): string {
      return this._redirectUrl;
    }

    public set RedirectUrl(v: string) {
      this._redirectUrl = v;
    }


    public get LoginUrl(): string {
      return this._redirectUrl;
    }


    public GetPermissionSet(user?: User | Role): Array<Permission> {
        return null;
    }

    public HasPermission(permission: Permission|  string , user?: User|Role): boolean {
        return false;
    }

    public HasPermissions(permissions: Array<Permission> | Array<string>, user?: User|Role): {[key: string]: string; } {
        return null;
    }

    public GetRoleSet(user?: User | Role): Array<Role> {
        return null;
    }

    public HasRole(role: Role | string, user?: User|Role): boolean {
        return false;
    }

    public HasRoles(role: Array<Role> | Array<string>, user?: User|Role): {[key: string]: string; } {
        return null;
    }

    public async Login(username: User | string, password?: string, extras?: Array<string>): Promise<boolean> {
        return null;
    }

    public async Logoff(): Promise<boolean> {
        return null;
    }
}
