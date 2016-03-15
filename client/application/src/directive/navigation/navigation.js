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
