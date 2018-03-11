import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  private _userName = '';
  private _password = '';
  private _rememberMe: boolean;
  private _btnClass = 'btn btn-lg btn-block btn-signin btn-primary';
  private _img = cordova.platformId === 'android' ?
   '/android_asset/www/assets/images/UnknownMale.png' :
   'assets/images/UnknownMale.png' ;

  public get btnClass(): string {
    return this._btnClass;
  }

  public get username(): string {
    return this._userName;
  }

  public set username(value: string) {
    this._userName = value;
  }


  public get password(): string {
    return this._password;
  }


  public set password(v: string) {
    this._password = v;
  }


  public get rememberMe(): boolean {
    return this._rememberMe;
  }


  public set rememberMe(v: boolean) {
    this._rememberMe = v;
  }

  public get img(): string {
    return this._img;
  }


  // @ViewChild('loginModal')
  // private _loginModal: ElementRef;

  constructor(private loginService: AuthService,
              private router: Router) { }

  ngOnInit() {
    // let el = this._loginModal.nativeElement;
    // (<any>jQuery(el)).modal('show');
    // #BAEAFD,#0043BE
    if (cordova.platformId === 'android') {
      window["StatusBar"].backgroundColorByHexString("#BAEAFD");
      window["StatusBar"].styleLightContent();
      window["StatusBar"].styleBlackTranslucent();
      window["StatusBar"].styleBlackOpaque();
    }
  }

  login() {
    let self = this;
    console.log(self.username);
    this.loginService.login(this.username, this.password, this.rememberMe).subscribe(() => {
      console.log(this.loginService.RedirectUrl);
      if (this.loginService.RedirectUrl) {
        this._btnClass = 'btn btn-lg btn-block btn-signin btn-primary';
        this.router.navigateByUrl(this.loginService.RedirectUrl);
      }
    }, (err) => {
      console.log(err);
      this._btnClass = 'btn-danger btn btn-lg btn-block btn-signin ';
    });

  }

}
