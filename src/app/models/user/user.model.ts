export class User {
    public id?: string;
    public firstName?: string;
    public lastName?: string;
    public userName?: string;
    public email?: string;
    public isActive?: boolean;

    constructor(user?: User) {
        if (user) {
            this.id = user.id;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.userName = user.userName;
            this.email = user.email;
            this.isActive = user.isActive;
        }
    }
}