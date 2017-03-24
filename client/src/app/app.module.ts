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
import { AgmCoreModule } from 'angular2-google-maps/core';

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
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-XiHqcr56619BrW1PZYzaTFnXVaMT6PY'
    })
  ],
  providers: [CityService, RouteAdviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
