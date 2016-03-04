(function (angular) {
    'use strict';

    angular
        .module('application.package', [
            'lbServices',
            'component.colour',
            'component.fonts',
            'component.fontsSize',
            'component.fontsCustom',
            'component.borders',
            'factory.packageStore'
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
    function PackageCtrl(Packages, $stateParams, PackageStore, $q) {
        var packageCtrl = this;

        PackageStore.setElem($stateParams.id);
        packageCtrl.package = PackageStore.getElem();

        // --- Borders

        packageCtrl.newBorder = {
            size: "14",
            class: "border-example"
        }
    }


})(angular);