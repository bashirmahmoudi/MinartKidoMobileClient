import { Observable } from 'rxjs/Observable';
import { UserDto } from '../model/user-dto';
import { RequestOptions } from '@angular/http';
import { User } from '../model/user';

export abstract class IuserService {
    public abstract Login(user: UserDto): Observable<User>;
    public abstract Logoff(requestOptions: RequestOptions): Observable<boolean>;
}
