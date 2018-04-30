import { IuserService } from '../core/interface/iuser-service';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { UserDto } from '../core/model/user-dto';
import { KIDO_CONFIG, KidoConfiguration } from '../appclass/kido-configuration';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../core/model/user';

@Injectable()
export class UserServices implements IuserService {

  private _loginServiceUrl: string;

  constructor(private http: Http, @Inject(KIDO_CONFIG) config: KidoConfiguration) {
    this._loginServiceUrl = config.loginServiceUrl;
  }

  Login(user: UserDto): Observable<User> {
    const body = JSON.stringify(UserDto);
    return this.http.post(this._loginServiceUrl, body)
      .map((response: Response, index: number) => {
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().token;
        if (token) {
          return token;
        }
        return Observable.throw(response.status);
      });
  }

  Logoff(): Observable<boolean> {
    return Observable.create();
  }
}
