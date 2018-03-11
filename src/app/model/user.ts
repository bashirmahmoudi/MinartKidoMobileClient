import { UserRole } from './user-role';
export class User {
    public Id: number;
    public Name?: string;
    public FamilyName?: string;
    public DisplayName?: string;
    public Password?: string;
    public Picture?: string;
    public Roles?: Array<UserRole>;
    public Info?: string;
    public Gender?: 'Male' | 'Female' | 'Other';
}
