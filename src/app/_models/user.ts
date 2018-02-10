export class User {
    id: number;
    email: string;
    password: string;
    fullName: string;
}

export class UserDto {
    public name: string;
    public username:string;
    public email: string;
    public password: string;
    public roles: any;
}