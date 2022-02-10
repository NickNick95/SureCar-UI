import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/user/login.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public hide = true;

    public form = {
		step: {} as any,
		ref: {} as FormGroup,
		errors: {} as any,
        messages: {
            userName: {
                required: 'User name is required.'
            },
            password: {
                required: 'Password is required.'
            }
        }
    }

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        this.buildForm();
    }

    public submit(): any {

        let model = new Login();
        model.userName = this.form.ref.value.userName;
        model.password = this.form.ref.value.password;

        this.authService.login(model)
            .subscribe(result => {
                this.router.navigate(['']);
            });
    }

    private buildForm() {
        this.form.ref = this.formBuilder.group({
            userName: ['', [Validators.required]],
            password: ['', [Validators.required]]
        })
    }
}
