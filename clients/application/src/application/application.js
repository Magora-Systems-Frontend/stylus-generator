(function (angular) {
    'use strict';

    angular
        .module('application', [
            /* vendors */
            'ui.router',
            'ngResource',
            'application.package',
            'directive.grid',
            'directive.navigation'
        ])
        .config(config);

    function config(
        $stateProvider,
        $locationProvider
    ) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('application', {
                url: '/',
                templateUrl: 'application/application.html',
                controller: AppCtrl,
                controllerAs: "appCtrl"
            });

    }

    function AppCtrl() {
        var appCtrl = this;
    }


})(angular);