(function (angular) {
    'use strict';

    angular
        .module('directive.grid', [
            'directive.topbar',
            'directive.navigation'
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

        gridCtrl.package = {
          colour : {
            primary: [
                {
                    class: 'brand-primary',
                    value: '#2780e3'
                },
                {
                    class: 'brand-success',
                    value: '#3fb618'
                },
                {
                    class: 'brand-info',
                    value: '#9954bb'
                },
                {
                    class: 'brand-warning',
                    value: '#ff7518'
                },
                {
                    class: 'brand-danger',
                    value: '#ff0039'
                },
                {
                    class: 'brand-black',
                    value: '#000'
                }
            ],
            secondary: [
                {
                    class: 'brand-gray',
                    value: '#eee'
                }
            ]
          },
          fonts: [{

          }]
        };

        gridCtrl.packageNew = {
            class: "",
            value: ""
        };


        gridCtrl.getColourPrimary = function() {
            return gridCtrl.package.colour.primary;
        };

        gridCtrl.getColourSecondary = function() {
            return gridCtrl.package.colour.secondary;
        };
    }


})(angular);
