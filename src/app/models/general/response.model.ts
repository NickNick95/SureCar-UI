export class ResponseModel<T> {
    public token: string;
    public isSuccessful: boolean;
	public content: T;
	public errors: any;
	public status: number;;

	constructor(response: ResponseModel<T>) {
        this.token = response.token;
        this.isSuccessful = response.isSuccessful
		this.content = response.content;
		this.errors = response.errors;
		this.status = response.status;
	}
}