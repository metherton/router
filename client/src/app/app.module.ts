import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { CityService } from './services/city.service';
import { RouteAdviceService } from './services/route-advice.service';
import { AppComponent } from './app.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import 'hammerjs';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [CityService, RouteAdviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
