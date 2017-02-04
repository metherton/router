describe('route advice service', function() {

  var service, httpBackend;

  beforeEach(function() {
    module('routeadvices');
    inject(function(routeAdviceService, _$httpBackend_) {
      service = routeAdviceService;
      httpBackend = _$httpBackend_;
    });
  });

  it('should call route advice api', function() {
    expect(true).toBe(true);
    httpBackend.whenGET('http://localhost/routeAdvice/').respond(200, {'waypoints' : ['first', 'second']})

    service.getRouteAdvice().then(function(routeAdvice) {
      expect(routeAdvice.waypoints).toEqual(['first', 'second']);
      httpBackend.flush();
    });

  });

});
