(function (angular) {
    'use strict';

    angular
        .module('component.borders', [
            'factory.packageStore'
        ])
        .component('borders', {
                templateUrl: 'components/package/borders/borders.html',
                replace: true,
                restrict: 'E',
                controller: BordersCtrl,
                controllerAs: 'bordersCtrl'
        });

    function BordersCtrl($attrs, PackageStore) {
        var bordersCtrl = this;

        bordersCtrl.title = $attrs.blockTitle;

        bordersCtrl.getCards = function() {
            return PackageStore.getByType($attrs.blockType);
        };

        bordersCtrl.addCard = function() {
            PackageStore.saveByType($attrs.blockType, angular.copy(bordersCtrl.temp));
            bordersCtrl.temp = {};
        };

    }


})(angular);
