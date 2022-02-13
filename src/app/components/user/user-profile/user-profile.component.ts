import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    public currentUser: User;
    public errors: string[] = [];

    constructor(private auth: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        this.auth.getCurrentUser()
            .subscribe(user => {
                if (user.hasOwnProperty('isActive') && user.isActive) {
                    this.currentUser = user;
                }
            })
    }

    public logout() {
        if (this.currentUser.id) {
            this.auth.logout(this.currentUser.id).subscribe(result => {
                if (result?.isSuccessful)
                    this.router.navigate(['/login']);
                else if (result?.errors)
                    this.errors = result?.errors
                else if (result?.errorMessage)
                    this.errors = [result?.errorMessage];
            });
        }
    }
}
