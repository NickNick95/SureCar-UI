export class Registrate {
    public userName: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    public confirmPassword: string;
    public email: string;
    public phoneNumber: string;

    public constructor(model: Registrate) {
        this.userName = model.userName;
        this.firstName = model.firstName;
        this.lastName = model.lastName;
        this.password = model.password;
        this.confirmPassword = model.confirmPassword;
        this.email = model.email;
        this.phoneNumber = model.phoneNumber;
    }
}