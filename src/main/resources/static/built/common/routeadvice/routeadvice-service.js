(function () {
    'use strict';
    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     */
    var RouteAdviceService = (function () {
        function RouteAdviceService($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        RouteAdviceService.prototype.getRouteAdvice = function (start, end) {
            var defer = this.$q.defer();
            this.$http.get('http://localhost:8080/routeAdvices/' + start + "/" + end).success(function (data) {
                defer.resolve(data);
            });
            return defer.promise;
        };
        RouteAdviceService.$inject = ['$http', '$q'];
        return RouteAdviceService;
    })();
    angular
        .module('routeadvices')
        .service('routeAdviceService', RouteAdviceService);
})();
//# sourceMappingURL=routeadvice-service.js.map