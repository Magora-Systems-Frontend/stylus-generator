(function (angular) {
    'use strict';

    angular
        .module('component.grid', [
            'component.topbar',
            'factory.packageStore'
        ])
        .component('grid', {
                templateUrl: 'components/grid/grid.html',
                replace: true,
                restrict: 'E',
                controller: GridCtrl,
                controllerAs: 'gridCtrl'
        });

    function GridCtrl(PackageStore) {
        var gridCtrl = this;


        gridCtrl.getPackages = function() {
            return PackageStore.getElems();
        };

        gridCtrl.packages = gridCtrl.getPackages();
        gridCtrl.filter = "";

    }


})(angular);
