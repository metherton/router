(function () {
    var AppComponent = (function () {
        function AppComponent(userService, $mdSidenav, $mdBottomSheet, $log, $scope, routeAdviceService) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdBottomSheet = $mdBottomSheet;
            this.$log = $log;
            this.$scope = $scope;
            this.routeAdviceService = routeAdviceService;
            this.selected = null;
            this.users = [];
            this.startPoints = [];
            this.endPoints = [];
            this.waypoints = [];
            this.startPoint = null;
            this.endPoint = null;
            this.showSpinner = false;
        }
        AppComponent.factory = function () {
            return {
                scope: {},
                bindToController: {},
                templateUrl: '/app/app-component.html',
                controller: AppComponent,
                controllerAs: '$ctrl',
                link: function (scope, element, attrs, controller) { controller.ngOnInit(); }
            };
        };
        AppComponent.prototype.ngOnInit = function () {
            // Load all registered users
            var _this = this;
            this.startPoints = [{ coords: "44.5_-36.0" }, { coords: "44.5_-36.0" }, { coords: "44.5_-36.0" }, { coords: "44.5_-36.0" }, { coords: "44.5_-36.0" }];
            this.endPoints = [{ coords: "106.0_-17.5" }, { coords: "44.5_-36.0" }, { coords: "44.5_-36.0" }, { coords: "44.5_-36.0" }];
            this.startPoint = undefined;
            this.endPoint = undefined;
            this.showSpinner = false;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                _this.users = [].concat(users);
                _this.selected = users[0];
            });
        };
        AppComponent.prototype.planRoute = function () {
            var _this = this;
            _this.showSpinner = true;
            this.routeAdviceService.getRouteAdvice(this.startPoint, this.endPoint).then(function (routeAdvice) {
                _this.showSpinner = false;  
                _this.waypoints = routeAdvice.waypoints;
            });
            // this.selected = angular.isNumber( userId )
            //   ? this.users[ userId ]
            //   : userId;
            //
            // this.toggleUsersList();
        };
        /**
         * Hide or Show the 'left' sideNav area
         */
        AppComponent.prototype.toggleUsersList = function () {
            this.$mdSidenav('left').toggle();
        };
        /**
         * Select the current avatars
         * @param userId
         */
        AppComponent.prototype.selectUser = function (userId) {
            this.selected = angular.isNumber(userId)
                ? this.users[userId]
                : userId;
            this.toggleUsersList();
        };
        /**
         * Show the bottom sheet
         */
        AppComponent.prototype.share = function ($event) {
            var _this = this;
            var bottomSheetConfig = {
                parent: angular.element(document.getElementById('content')),
                template: "\n        <md-bottom-sheet class=\"md-list md-has-header\">\n          <share-contact contact=\"$ctrl.selected\"></share-contact>\n        </md-bottom-sheet>\n        ",
                scope: this.$scope.$new(),
                targetEvent: $event
            };
            this.$mdBottomSheet
                .show(bottomSheetConfig)
                .then(function (clickedItem) {
                _this.$log.debug(clickedItem.name + " clicked!");
            });
        };
        return AppComponent;
    })();
    angular
        .module('myApp')
        .directive('app', AppComponent.factory);
})();
//# sourceMappingURL=app-component.js.map
