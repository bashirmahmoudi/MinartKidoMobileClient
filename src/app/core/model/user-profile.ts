import { User } from './user';
import { UserGender } from './user-gender.enum';

export class UserProfile {

    private _userId: number;
    private _user: User;
    private _displayName: string;
    private _info: string;
    private _gender: UserGender;

    public get UserId(): number {
        return this._userId;
    }

    public set UserId(v: number) {
        this._userId = v;
    }

    public get User(): User {
        return this._user;
    }

    public set User(v: User) {
        this._user = v;
    }

    public get DisplayName(): string {
        return this._displayName;
    }

    public set DisplayName(v: string) {
        this._displayName = v;
    }

    public get Info(): string {
        return this._info;
    }

    public set Info(v: string) {
        this._info = v;
    }

    public get Gender(): UserGender {
        return this._gender;
    }

    public set Gender(v: UserGender) {
        this._gender = v;
    }

}
