(function (angular) {
    'use strict';

    config.$inject = ["$stateProvider", "$locationProvider", "$translateProvider"];
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
            'directive.grid'
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
(function (angular) {
    'use strict';

    config.$inject = ["$stateProvider"];
    angular
        .module('application.package', [
            // inject here
        ])
        .config(config);

    // Config
    function config(
        $stateProvider
    ) {
        $stateProvider
            .state('application.package', {
                url: 'package/:id',
                templateUrl: 'application/package/package.html',
                controller: PackageCtrl,
                controllerAs: "packageCtrl"
            });

    }

    // Controller of page
    function PackageCtrl() {
        var packageCtrl = this;



    }


})(angular);
(function (angular) {
    'use strict';

    config.$inject = ["$stateProvider"];
    angular
        .module('application.packages', [

        ])
        .config(config);

    // Config
    function config(
        $stateProvider
    ) {
        $stateProvider
            .state('application.packages', {
                url: 'package',
                templateUrl: 'application/packages/packages.html',
                controller: PackagesCtrl,
                controllerAs: "packagesCtrl"
            });

    }

    // Controller of page
    function PackagesCtrl() {
        var packagesCtrl = this;



    }


})(angular);
(function (angular) {
    'use strict';

    angular
        .module('directive.grid', [
            'directive.topbar'
        ])
        .directive('grid', function () {
            return {
                templateUrl: 'directive/grid/grid.html',
                replace: true,
                restrict: 'E',
                scope: true,
                bindToController: true,
                controller: GridCtrl,
                controllerAs: 'gridCtrl'
            }
        });

    function GridCtrl() {
        var gridCtrl = this;

    }


})(angular);

(function (angular) {
    'use strict';

    angular
        .module('directive.navigation', [
        ])
        .directive('navigation', function () {
            return {
                templateUrl: 'directive/navigation/navigation.html',
                replace: true,
                restrict: 'E',
                scope: true,
                bindToController: true,
                controller: NavigationCtrl,
                controllerAs: 'navigationCtrl'
            }
        });

    function NavigationCtrl() {
        var navigationCtrl = this;

    }


})(angular);

(function (angular) {
    'use strict';

    angular
        .module('directive.topbar', [
        ])
        .directive('topbar', function () {
            return {
                templateUrl: 'directive/topbar/topbar.html',
                replace: true,
                restrict: 'E',
                scope: true,
                bindToController: true,
                controller: TopbarCtrl,
                controllerAs: 'topbarCtrl'
            }
        });

    function TopbarCtrl() {
        var topbarCtrl = this;

    }


})(angular);

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j, 1);
        }
    }
    return a;
};