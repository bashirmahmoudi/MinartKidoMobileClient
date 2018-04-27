export interface IuserService {
    Login(user: any): Promise<any>;
    Logoff(): Promise<boolean>;
}
