(()=> {

  class AppComponent {

    static factory() {
      return {
        scope: {},
        bindToController: {},
        templateUrl: '/app/app-component.html',
        controller: AppComponent,
        controllerAs: '$ctrl',
        link: ( scope, element, attrs, controller: AppComponent )=> {controller.ngOnInit()}
      }
    }

    selected = null;
    users = [];
    startPoints = [];
    endPoints = [];
    waypoints = [];
    startPoint = null;
    endPoint = null;
    showSpinner = false;


    constructor(
      private userService,
      private $mdSidenav: ng.material.ISidenavService,
      private $mdBottomSheet: ng.material.IBottomSheetService,
      private $log: ng.ILogService,
      private $scope: ng.IScope,
      private routeAdviceService
    ) {}

    ngOnInit() {
      // Load all registered users

       this.startPoints = [{coords: "44.5_-36.0"},{coords: "44.5_-36.0"} ,{coords: "44.5_-36.0"} ,{coords: "44.5_-36.0"},{coords: "44.5_-36.0"}   ];
       this.endPoints = [{coords: "106.0_-17.5"},{coords: "44.5_-36.0"} ,{coords: "44.5_-36.0"} ,{coords: "44.5_-36.0"}  ];
       this.startPoint = undefined;
       this.endPoint = undefined;
       this.showSpinner = false;

      this.userService
        .loadAllUsers()
        .then( ( users )=> {
          this.users = [].concat( users );
          this.selected = users[ 0 ];
        } );
    }

    planRoute() {

      this.showSpinner = true;
      
      this.routeAdviceService.getRouteAdvice(this.startPoint, this.endPoint).then((routeAdvice) => {
        this.waypoints = routeAdvice.waypoints;
        this.showSpinner = false;
      });

      // this.selected = angular.isNumber( userId )
      //   ? this.users[ userId ]
      //   : userId;
      //
      // this.toggleUsersList();

    }

    /**
     * Hide or Show the 'left' sideNav area
     */
    toggleUsersList() {
      this.$mdSidenav( 'left' ).toggle();
    }

    /**
     * Select the current avatars
     * @param userId
     */
    selectUser( userId ) {

      this.selected = angular.isNumber( userId )
        ? this.users[ userId ]
        : userId;

      this.toggleUsersList();

    }

    /**
     * Show the bottom sheet
     */
    share( $event ) {

      const bottomSheetConfig = {
        parent: angular.element( document.getElementById( 'content' ) ),
        template: `
        <md-bottom-sheet class="md-list md-has-header">
          <share-contact contact="$ctrl.selected"></share-contact>
        </md-bottom-sheet>
        `,
        scope: this.$scope.$new(),
        targetEvent: $event
      };

      this.$mdBottomSheet
        .show( bottomSheetConfig )
        .then( ( clickedItem )=> {
          this.$log.debug( `${clickedItem.name} clicked!` );
        } );

    }

  }

  angular
    .module( 'myApp' )
    .directive( 'app', AppComponent.factory )

})();
