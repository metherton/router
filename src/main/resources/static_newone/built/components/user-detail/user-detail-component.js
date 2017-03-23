(function () {
    'use strict';
    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    var UserDetailComponent = (function () {
        function UserDetailComponent() {
        }
        UserDetailComponent.factory = function () {
            return {
                scope: {},
                bindToController: {
                    user: '='
                },
                transclude: true,
                templateUrl: '/app/components/user-detail/user-detail.html',
                controller: UserDetailComponent,
                controllerAs: '$ctrl',
                link: function (scope, element, attrs, controller) { controller.ngOnInit(); }
            };
        };
        ;
        UserDetailComponent.prototype.ngOnInit = function () { };
        UserDetailComponent.$inject = [];
        return UserDetailComponent;
    })();
    angular.module('userDetail')
        .directive('userDetail', UserDetailComponent.factory);
})();
//# sourceMappingURL=user-detail-component.js.map