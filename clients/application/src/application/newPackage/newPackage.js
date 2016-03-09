(function (angular) {
    'use strict';

    angular
        .module('application.newPackage', [
            'factory.packageStore',
            'component.colour',
            'component.fonts',
            'component.fontsSize',
            'component.fontsCustom',
            'component.borders',
            'component.navigation'
        ])
        .config(config);

    // Config
    function config(
        $stateProvider
    ) {
        $stateProvider
            .state('application.newPackage', {
                url: 'create',
                templateUrl: 'application/newPackage/newPackage.html',
                controller: NewPackageCtrl,
                controllerAs: "newPackageCtrl"
            });

    }

    // Controller of page
    function NewPackageCtrl(PackageStore, $q) {
        var newPackageCtrl = this;

        // Initilize state
        PackageStore.setDefault();
        newPackageCtrl.package = PackageStore.getElem();

        // Action for saving current title of package
        newPackageCtrl.actionTitleChange = function() {
          PackageStore.saveByProperty("name", newPackageCtrl.package.name);
        }

    }


})(angular);
