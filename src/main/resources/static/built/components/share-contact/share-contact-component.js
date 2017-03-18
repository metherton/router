(function () {
    'use strict';
    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    var ShareContact = (function () {
        function ShareContact($mdBottomSheet) {
            this.$mdBottomSheet = $mdBottomSheet;
            this.items = [
                { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
                { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
                { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
                { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
            ];
        }
        ShareContact.factory = function () {
            return {
                scope: {},
                bindToController: {
                    contact: '='
                },
                templateUrl: '/app/components/share-contact/share-contact.html',
                controller: ShareContact,
                controllerAs: '$ctrl',
                link: function (scope, element, attrs, controller) { controller.ngOnInit(); }
            };
        };
        ;
        ShareContact.prototype.ngOnInit = function () { };
        ShareContact.prototype.performAction = function (action) {
            console.log(action);
            this.$mdBottomSheet.hide(action);
        };
        ShareContact.$inject = ['$mdBottomSheet'];
        return ShareContact;
    })();
    angular.module('shareContact')
        .directive('shareContact', ShareContact.factory);
})();
//# sourceMappingURL=share-contact-component.js.map