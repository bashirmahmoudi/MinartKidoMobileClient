import { Role } from './role';
import { Permission } from './permission';

export class User {

    private _id: number;
    private _permissions: Array<Permission>;
    private _name: string;
    private _password: string;
    private _roles: Array<Role>;

    public get Id(): number {
        return this._id;
    }

    public set Id(v: number) {
        this._id = v;
    }

    public get Name(): string {
        return this._name;
    }

    public set Name(v: string) {
        this._name = v;
    }

    public get Password(): string {
        return this._password;
    }

    public set Password(v: string) {
        this._password = v;
    }

    public get Roles(): Array<Role> {
        return this._roles;
    }

    public set Roles(v: Array<Role>) {
        this._roles = v;
    }

    public get permissions(): Array<Permission> {
        return this._permissions;
    }

    public set permissions(v: Array<Permission>) {
        this._permissions = v;
    }
}
