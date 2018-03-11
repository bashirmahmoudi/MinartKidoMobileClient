import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

const ANDROID_PATH_PREFEX = '/android_asset/www/';

@Injectable()
export class ProfileService {

  private _logedInUser: User;

  constructor() {
    this._logedInUser = {
      Id: 1,
      Name: 'Bashir',
      FamilyName: 'Mahmoudi',
      DisplayName: 'Bashir Mahmoudi',
      Info: 'Developer',
      Gender: 'Male'
    };
   }

   public get UserDisplayName(): string {
     return this._logedInUser ? this._logedInUser.DisplayName : 'Unknown';
   }

   public get UserInfo(): string {
    return this._logedInUser ? this._logedInUser.Info : 'Unknown';
   }

   public get UserPicture(): string {
     if (this._logedInUser && this._logedInUser.Picture) {
       return this._logedInUser.Picture;
     }

     if (cordova.platformId === 'android') {
       return this._logedInUser ? this._logedInUser.Gender === 'Female' ?
         `${ANDROID_PATH_PREFEX}assets/images/UnknownFemale.jpg` :
         `${ANDROID_PATH_PREFEX}assets/images/UnknownMale.png` :
         `${ANDROID_PATH_PREFEX}assets/images/UnknownMale.png`;
     }

     return this._logedInUser ? this._logedInUser.Gender === 'Female' ?
     'assets/images/UnknownFemale.jpg' : 'assets/images/UnknownMale.png' : 'assets/images/UnknownMale.png';
   }

}
