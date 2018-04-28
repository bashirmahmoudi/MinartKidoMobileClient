import { User } from '../model/user';
import { Permission } from '../model/permission';
import { Role } from '../model/role';
import { IuserService } from '../interface/iuser-service';

export class SecurityContext {
    private _userService: IuserService;
    private _currentUser: User;

    constructor(userService: IuserService) {
        console.log(userService);
        this._userService = userService;
    }

    /**
     * Current Login Identity
     */
    public get CurrentUser(): User {
        return this._currentUser;
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
