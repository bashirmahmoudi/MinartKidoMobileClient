import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ButtonType } from '../../viewmodel/button-type.enum';
import { MinartContext } from '../../minart-context';
import '../../class/device-info';

const LARGE_BLOCK_BTN = 'btn btn-lg btn-block';

@Component({
  selector: 'minart-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  private _userName = '';
  private _password = '';
  private _rememberMe = false;
  private _profileImage: string;
  private _isRememberMeDisable = false;
  private _showRememberMe = true;
  private _rememberMeLable = 'Remember Me :';
  private _rememberMeClass: string;
  private _message = '';
  private _messageClass: string;
  private _userNameValid = true;
  private _passwordValid = true;
  private _isUserNameDisabled = false;
  private _isPasswordDisabled = false;
  private _isUserNameReadonly = false;
  private _isPasswordReadonly = false;
  private _showUsernameLable = false;
  private _showPasswordLable = false;
  private _userNameLable = 'Username :';
  private _passwordLable = 'Password';
  private _loginBtnType: ButtonType = ButtonType.PRIMARY;
  private _cancleBtnType: ButtonType = ButtonType.DEFUALT;

  @Input('profilePicture')
  public Image: string;

  @Input('loginClass')
  public LoginClass: string;

  @Input('scapeClass')
  public ScapeClass: string;

  @Input('remembermeClass')
  public RememberMeClass: string;

  @Input('userNameClass')
  public UserNameClass: string;

  @Input('passwordClass')
  public PasswordClass: string;

  @Input('usrnameLbl')
  public UsernameLable: string;


  public get profileImage(): string {
    const imageBase = this.minartContext.DeviceInfo.IsAndroid ?
      '/android_asset/www/assets/images/' :
      'assets/images/';
    const img = this.Image ?
      this.Image.startsWith('/') ? this.Image : `${imageBase}${this.Image}` :
      `${imageBase}UnknownMail.png`;

    return img;
  }

  public get showUsernameLable(): boolean {
    return this._showUsernameLable;
  }

  public get usernameLable(): string {
    return this.UsernameLable ? this.UsernameLable : this._userNameLable;
  }

  public get username(): string {
    return this._userName;
  }

  public set username(v: string) {
    this._userName = v;
  }

  public get isUsernameValid(): boolean {
    return this._userNameValid;
  }

  public get showPasswordLable(): boolean {
    return this._showPasswordLable;
  }

  public get passwordLable(): string {
    return this._passwordLable;
  }

  public get password(): string {
    return this._password;
  }

  public set password(v: string) {
    this._password = v;
  }

  public get isPasswordValid(): boolean {
    return this._passwordValid;
  }

  public get isUsernameDisabled(): boolean {
    return this._isUserNameDisabled;
  }

  public get isPasswordDisabled(): boolean {
    return this._isPasswordDisabled;
  }

  public get isRememeberMeDisabled(): boolean {
    return this.isRememeberMeDisabled;
  }

  public get rememberMeLable(): string {
    return this._rememberMeLable;
  }

  public get rememberMe(): boolean {
    return this._rememberMe;
  }

  public set rememberMe(v: boolean) {
    this._rememberMe = v;
  }

  public get message(): string {
    return this._message;
  }

  public get LoginBtnClass(): string {
    return `${LARGE_BLOCK_BTN} btn-${this._loginBtnType ? this._loginBtnType : 'default'} ${this.LoginClass}`;
  }

  public get CancleBtnClass(): string {
    return `${LARGE_BLOCK_BTN} btn-${this._cancleBtnType ? this._cancleBtnType : 'default'} ${this.ScapeClass}`;
  }

  public get RememberChkClass(): string {
    return `checkbox ${this.RememberMeClass}`;
  }

  constructor(private minartContext: MinartContext) { }

}
