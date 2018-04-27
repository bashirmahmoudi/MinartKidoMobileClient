import { Permission } from './permission';

export class Role {

    private _name: string;
    private _permissions: Array<Permission>;
    private _roleId: string;

    public get RoleId(): string {
        return this._roleId;
    }

    public set RoleId(v: string) {
        this._roleId = v;
    }

    public get Name(): string {
        return this._name;
    }

    public set Name(v: string) {
        this._name = v;
    }

    public get Permissions(): Array<Permission> {
        return this._permissions;
    }

    public set Permissions(v: Array<Permission>) {
        this._permissions = v;
    }

}
