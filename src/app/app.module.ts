import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WarehouseService } from './services/warehouse/warehouse.service.service';
import { APIInterceptor } from './services/api-interceptor';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';
import { WarehouseThumbnailComponent } from './components/warehouse-thumbnail/warehouse-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WarehouseListComponent,
    WarehouseThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
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
