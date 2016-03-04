(function (angular) {
    'use strict';

    angular
        .module('component.fontsSize', [
            'factory.packageStore'
        ])
        .component('fontsSize', {
                templateUrl: 'components/fontsSize/fontsSize.html',
                replace: true,
                restrict: 'E',
                controller: ColourCtrl,
                controllerAs: 'fontsSizeCtrl'
        });

    function ColourCtrl($attrs, PackageStore) {
        var fontsSizeCtrl = this;

        fontsSizeCtrl.title = $attrs.blockTitle;

        fontsSizeCtrl.temp = {
          value: "",
          class: ""
        };

        fontsSizeCtrl.getCards = function() {
            return PackageStore.getByType($attrs.blockType);
        };

        fontsSizeCtrl.addCard = function() {
            PackageStore.saveByType($attrs.blockType, angular.copy(fontsSizeCtrl.temp));
            fontsSizeCtrl.temp = {};
        };

    }


})(angular);
