import { User } from "../model/User";

export abstract class UserService{

    public abstract isAuthenticated(): boolean;
    public abstract getAccessToken(): string;

    public abstract setUserDetails(user: User): void;

}