export class ResponseModel<T> {
	public content: T;
	public errors: any;
	public status: number;;

	constructor(response: ResponseModel<T>) {
		this.content = response.content;
		this.errors = response.errors;
		this.status = response.status;
	}
}