import { Observable } from 'rxjs/Observable';
import { UserDto } from '../model/user-dto';
import { RequestOptions } from '@angular/http';

export abstract class IuserService {
    public abstract Login(user: UserDto): Observable<any>;
    public abstract Logoff(requestOptions: RequestOptions): Observable<boolean>;
}
