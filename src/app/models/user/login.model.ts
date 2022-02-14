export class Login {
    public userName: string;
    public password: string;

    public constructor(model: Login) {
        this.userName = model.userName;
        this.password = model.password;
    }
}