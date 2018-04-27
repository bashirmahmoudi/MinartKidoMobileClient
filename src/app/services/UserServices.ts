import { IuserService } from '../core/interface/iuser-service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServices implements IuserService {
    Login(user: any): Promise<any> {
        return Promise.resolve({
            Id: 1,
            UserName: 'Admin'
        });
    }

    Logoff(): Promise<boolean> {
        return Promise.resolve(true);
    }
}
