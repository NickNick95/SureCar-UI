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

import { GoogleMapsModule } from '@angular/google-maps'
import { WarehouseService } from './services/warehouse/warehouse.service';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CarThumbnailComponent } from './components/car/car-thumbnail/car-thumbnail.component';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { CartThumbnailComponent } from './components/cart/cart-thumbnail/cart-thumbnail.component';
import { AuthService } from './services/auth/auth.service';
import { CartService } from './services/cart/cart.service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarListComponent,
    CarThumbnailComponent,
    CarDetailsComponent,
    CartListComponent,
    CartThumbnailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    GoogleMapsModule,
    MatIconModule
  ],
  providers: [
    CartService,
    AuthService,
    WarehouseService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: APIInterceptor,
        multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
