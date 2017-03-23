import { TestBed, inject, async, fakeAsync, tick} from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, RequestOptions, XHRBackend, Response, ResponseOptions, ConnectionBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouteAdviceService } from './route-advice.service';

describe('RouteAdviceService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [RouteAdviceService, {provide: XHRBackend, useClass: MockBackend}]
    });
  }));

  var start = '-73.5_40.0';
  var end = '139.5_35.0';

  it('should ...', inject([RouteAdviceService], (service: RouteAdviceService) => {
    expect(service).toBeTruthy();
  }));

  it('should get route advice', fakeAsync(inject([RouteAdviceService, XHRBackend], (service: RouteAdviceService, mockBackend) => {
    mockBackend.connections.subscribe((connection) => this.lastConnection = connection);
    let result: String[];
    service.getRouteAdvice(start, end).then((waypoints: String[]) => result = waypoints);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({waypoints: ['1', '2']}),
    })));
    tick();
    expect(result).toEqual({waypoints: ['1', '2']})

  })))

});
