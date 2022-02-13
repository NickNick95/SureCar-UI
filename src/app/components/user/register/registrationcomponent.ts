import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Registrate } from 'src/app/models/user/registrate.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    public errors: string[] = [];

    public form = {
        step: {} as any,
        ref: {} as FormGroup,
        errors: {
            userName: 'User name is required.',
            firstName: 'First name is required.',
            lastName: 'Last name is required.',
            email: 'Email is required.',
            phoneNumber: 'Phone number is required.',
            password: 'Password is required.',
            confirmPassword: 'Confirm password is required.'
        }
    }

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private dialog: MatDialog) { }

    ngOnInit(): void {
        this.buildForm()
    }

    public submit(): any {
        if (this.form.ref.valid) {
            let model = new Registrate(this.form.ref.value);

            this.authService.registrate(model)
                .subscribe(result => {
                    if (result?.isSuccessful)
                        this.router.navigate(['login']);
                    else if (result?.errors)
                        this.errors = result?.errors
                    else if (result?.errorMessage)
                        this.errors = [result?.errorMessage];
                });
        }
    }

    private buildForm() {
        this.form.ref = this.formBuilder.group({
            userName: ['', [Validators.required]],
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', [Validators.required]]
        })
    }
}
