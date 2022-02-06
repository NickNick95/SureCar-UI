import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WarehouseService } from './services/warehouse/warehouse.service.service';
import { APIInterceptor } from './services/api-interceptor';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarThumbnailComponent } from './components/car-thumbnail/car-thumbnail.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { GoogleMapsModule } from '@angular/google-maps'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarListComponent,
    CarThumbnailComponent,
    CarDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    GoogleMapsModule
  ],
  providers: [
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
