import { PermissionType } from './permission-type.enum';

export class Permission {

    private _id: string;
    private _name: string;
    private _accessType: PermissionType;

    public get Id(): string {
        return this._id;
    }

    public set Id(v: string) {
        this._id = v;
    }

    public get Name(): string {
        return this._name;
    }

    public set Name(v: string) {
        this._name = v;
    }

    public get AccessType(): PermissionType {
        return this._accessType;
    }

    public set AccessType(v: PermissionType) {
        this._accessType = v;
    }
}
