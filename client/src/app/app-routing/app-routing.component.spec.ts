import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CityService } from '../services/city.service';
import { AppRoutingComponent } from './app-routing.component';

describe('AppRoutingComponent', () => {
  let cityService: CityService;
  let component: AppRoutingComponent;
  let fixture: ComponentFixture<AppRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ AppRoutingComponent ],
      providers: [CityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRoutingComponent);
    component = fixture.componentInstance;
    // CityService actually injected into the component
    cityService = fixture.debugElement.injector.get(CityService);
    // Setup spy on the `getCities` method
    spy = spyOn(cityService, 'getCities')
      .and.returnValue(Promise.resolve(['London', 'New York']));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
