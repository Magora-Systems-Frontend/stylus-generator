(function (angular) {
    'use strict';

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