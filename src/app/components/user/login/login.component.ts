import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/user/login.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CryptoService } from 'src/app/services/crypto/crypto.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public hide = true;
    public errors: string[] = [];

    public form = {
        step: {} as any,
        ref: {} as FormGroup,
        errors: {
            userName: 'User name is required.',
            password: 'Password is required.'
        }
    }

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private crypto: CryptoService) { }

    ngOnInit(): void {
        this.buildForm();
    }

    public submit(): any {
        if (this.form.ref.valid) {
            let model = new Login(this.form.ref.value);

            model.password = this.crypto.encrypt(model.password);

            this.authService.login(model)
                .subscribe(result => {
                    if (result?.isSuccessful)
                        this.router.navigate(['']);
                    else if (result?.errors)
                        this.errors = result?.errors
                    else if (result?.errorMessage)
                        this.errors = [result?.errorMessage];
                });
        }
    }

    public registration() {
        this.router.navigate(['registration']);
    }

    private buildForm() {
        this.form.ref = this.formBuilder.group({
            userName: ['', [Validators.required]],
            password: ['', [Validators.required]]
        })
    }
}
