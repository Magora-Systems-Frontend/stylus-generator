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
