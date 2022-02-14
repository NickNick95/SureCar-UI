import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './services/api-interceptor';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule  } from '@angular/cdk/overlay'

import { GoogleMapsModule } from '@angular/google-maps'
import { WarehouseService } from './services/warehouse/warehouse.service';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CarThumbnailComponent } from './components/car/car-thumbnail/car-thumbnail.component';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { CartThumbnailComponent } from './components/cart/cart-thumbnail/cart-thumbnail.component';
import { AuthService } from './services/auth/auth.service';
import { CartService } from './services/cart/cart.service.service';
import { JwtHelperService } from './services/jwtHelpe/jwt-helper.service';
import { LoginComponent } from './components/user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CacheService } from './services/cache/cache.service';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { RegistrationComponent } from './components/user/register/registrationcomponent';
import { OrderService } from './services/order/order.service';
import { BaseService } from './services/base-service';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderThumbnailComponent } from './components/order/order-thumbnail/order-thumbnail.component';
import { CryptoService } from './services/crypto/crypto.service';
import { ErrorComponent } from './components/general/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarListComponent,
    CarThumbnailComponent,
    CarDetailsComponent,
    CartListComponent,
    CartThumbnailComponent,
    LoginComponent,
    UserProfileComponent,
    RegistrationComponent,
    OrderListComponent,
    OrderThumbnailComponent,
    ErrorComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    GoogleMapsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    OverlayModule
  ],
  providers: [
    CryptoService,
    BaseService,
    OrderService,
    CacheService,
    CartService,
    AuthService,
    JwtHelperService,
    WarehouseService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: APIInterceptor,
        multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
