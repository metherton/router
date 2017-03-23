angular.module('hello', [])
    .controller('home', function($scope, $http) {
        // $http.get('/resource/').success(function(data) {
       $http.get('/routeAdvices/44.5_-36.0/106.0_-17.5').success(function(data) {
            $scope.greeting = data;
            console.log($scope.greeting);
        });
    });
