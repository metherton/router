import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutingComponent } from './app-routing.component';
import {CityService} from "../services/city.service";

describe('App Routing Component', () => {
  let component: AppRoutingComponent;
  let fixture: ComponentFixture<AppRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ AppRoutingComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: CityService, useValue: {getCities: jasmine.createSpy('getCities ')}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
