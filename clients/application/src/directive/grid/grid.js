(function (angular) {
    'use strict';

    angular
        .module('directive.grid', [
            'directive.topbar',
            'factory.packageStore'
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

    function GridCtrl(PackageStore) {
        var gridCtrl = this;


        gridCtrl.getPackages = function() {
            return PackageStore.getElems();
        };

        gridCtrl.packages = gridCtrl.getPackages();
        gridCtrl.filter = "";

    }


})(angular);
