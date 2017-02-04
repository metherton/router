(()=>{
  'use strict';

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   */
  class RouteAdviceService {

    static $inject = ['$http', '$q'];
    constructor(private $http: ng.IHttpService, private $q: ng.IQService) {}

    getRouteAdvice():ng.IPromise<any> {
      var defer = this.$q.defer();
      this.$http.get('the url').success((data:any) => {
        defer.resolve(data);
      });
      return defer.promise
    }

  }

  angular
    .module('routeadvices')
    .service('routeAdviceService', RouteAdviceService);

})();
