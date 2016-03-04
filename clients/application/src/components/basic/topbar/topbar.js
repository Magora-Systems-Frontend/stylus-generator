(function (angular) {
    'use strict';

    angular
        .module('component.topbar', [
        ])
        .component('topbar', {
                templateUrl: 'components/basic/topbar/topbar.html',
                replace: true,
                restrict: 'E',
                controller: TopbarCtrl,
                controllerAs: 'topbarCtrl'
        });

    function TopbarCtrl() {
        var topbarCtrl = this;

    }


})(angular);
