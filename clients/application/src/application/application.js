(function (angular) {
    'use strict';

    angular
        .module('application', [
            /* vendors */
            'ui.router',
            'ngResource',
            'application.package',
            'component.colour',
            'component.fonts',
            'component.fontsSize',
            'component.fontsCustom',
            'component.borders',
            'directive.grid',
            'directive.navigation',
            'factory.packageStore'
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