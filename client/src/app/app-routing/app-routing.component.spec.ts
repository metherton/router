import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import 'rxjs/add/operator/toPromise';
import { CityService } from '../services/city.service';
import { AppRoutingComponent } from './app-routing.component';

describe('AppRoutingComponent', () => {
  let cityService: CityService;
  let http: Http;
  let component: AppRoutingComponent;
  let fixture: ComponentFixture<AppRoutingComponent>;

  beforeEach(async(() => {

    let cityServiceStub = {
      getCities: jasmine.createSpy('getCities')
    };

    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ AppRoutingComponent ],
      providers: [{provide: CityService, useValue: cityServiceStub}, {provide: XHRBackend, useValue: MockBackend}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRoutingComponent);
    component = fixture.componentInstance;
    // CityService actually injected into the component
    cityService = fixture.debugElement.injector.get(CityService);
    http = fixture.debugElement.injector.get(Http);
    // Setup spy on the `getCities` method
    spy = spyOn(cityService, 'getCities')
      .and.returnValue(Promise.resolve(['London', 'New York']));
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
