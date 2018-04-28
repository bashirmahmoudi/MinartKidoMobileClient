import { Observable } from 'rxjs/Observable';
import { UserDto } from '../model/user-dto';
import { RequestOptions } from '@angular/http';

export interface IuserService {
    Login(user: UserDto): Observable<any>;
    Logoff(requestOptions: RequestOptions): Observable<boolean>;
}
