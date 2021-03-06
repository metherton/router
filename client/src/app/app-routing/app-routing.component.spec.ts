import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutingComponent } from './app-routing.component';
import { City } from './app-routing.component';
import {CityService} from "../services/city.service";
import {RouteAdviceService} from "../services/route-advice.service";

var routeAdviceService;

describe('App Routing Component', () => {
  let component: AppRoutingComponent;
  let fixture: ComponentFixture<AppRoutingComponent>;
  //let routeAdviceService: RouteAdviceService;

  var start = '-73.5_40.0';
  var end = '139.5_35.0';

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ AppRoutingComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: CityService, useValue: {getCities: jasmine.createSpy('getCities')}},
        {provide: RouteAdviceService, useValue: {getRouteAdvice: jasmine.createSpy('getRouteAdvice').and.returnValue(Promise.resolve({waypoints: ['1','2']}))}}]
    })
      .compileComponents();

    routeAdviceService = TestBed.get(RouteAdviceService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make route advice request for begin and end cities', function() {

    component.model.startCity = new City('New York', '40.0', '-73.5');
    component.model.endCity = new City('Tokyo', '35.0', '139.5');

    component.planRoute();

    expect(routeAdviceService.getRouteAdvice).toHaveBeenCalledWith(start, end);
  })

});
