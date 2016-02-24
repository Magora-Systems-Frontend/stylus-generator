(function (angular) {
    'use strict';

    angular
        .module('directive.grid', [
            'directive.topbar',
            'lbServices'
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

    function GridCtrl(Packages) {
        var gridCtrl = this;

        gridCtrl.getPackages = Packages.find();
    }


})(angular);
