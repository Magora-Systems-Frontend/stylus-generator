(function (angular) {
    'use strict';

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