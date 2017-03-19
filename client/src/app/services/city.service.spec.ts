import { HttpModule, Http, BaseRequestOptions, RequestOptions, XHRBackend, Response, ResponseOptions, ConnectionBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';
import { CityService } from './city.service';

describe('CityService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CityService, {provide: XHRBackend, useClass: MockBackend}]
    });

  }));

  it('should ...', inject([CityService], (service: CityService) => {
    expect(service).toBeTruthy();
  }));

  it('should call api', inject([CityService, XHRBackend], (service: CityService, mockBackend) => {
    const mockResponse = ['London', 'Sheffield'];
    mockBackend.connections.subscribe((connection) => this.lastConnection = connection);
    service.getCities();
    expect(this.lastConnection.request.url).toMatch(/data\/cities.json$/, 'url invalid');
  }));

  it('should getCities', fakeAsync(inject([CityService, XHRBackend], (service: CityService, mockBackend) => {
    mockBackend.connections.subscribe((connection) => this.lastConnection = connection);
    let result: String[];
    service.getCities().then((cities: String[]) => result = cities);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({data: ['London', 'New York']}),
    })));
    tick();
    expect(result).toEqual({data: ['London', 'New York']});
  })));






});
