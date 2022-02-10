import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';

const routes: Routes = [
    { path: '', component: CarListComponent },
    { path: 'login', component: LoginComponent},
    { path: 'profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
