(function (angular) {
    'use strict';

    angular
        .module('component.topbar', [
          'factory.packageStore'
        ])
        .component('topbar', {
                templateUrl: 'components/basic/topbar/topbar.html',
                replace: true,
                restrict: 'E',
                controller: TopbarCtrl,
                controllerAs: 'topbarCtrl'
        });

    function TopbarCtrl(PackageStore) {
        var topbarCtrl = this;


    }


})(angular);
