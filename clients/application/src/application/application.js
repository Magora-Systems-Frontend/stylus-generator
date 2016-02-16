(function (angular) {
    'use strict';

    angular
        .module('application', [

            /* vendors */
            'angular-loading-bar',
            'pascalprecht.translate',
            'ui.router',
            'ui.bootstrap',
            'ngResource',
            'application.packages',
            'application.package',
            'directive.grid',
            'directive.navigation'
        ])
        .config(config);

    function config(
        $stateProvider,
        $locationProvider,
        $translateProvider
    ) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('application', {
                url: '/',
                templateUrl: 'application/application.html',
                controller: AppCtrl,
                controllerAs: "appCtrl"
            });

        $translateProvider.useStaticFilesLoader({
            prefix: '/translates/',
            suffix: '.json'
        });

        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.preferredLanguage('ru-RU');

    }

    function AppCtrl() {
        var appCtrl = this;
    }


})(angular);