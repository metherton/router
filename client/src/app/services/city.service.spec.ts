import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { CityService } from './city.service';

describe('CityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CityService]
    });
  });

  it('should ...', inject([CityService], (service: CityService) => {
    expect(service).toBeTruthy();
  }));
});
