(function (angular) {
    'use strict';

    angular
        .module('component.fonts', [
            'factory.packageStore'
        ])
        .component('fonts', {
                templateUrl: 'components/package/fonts/fonts.html',
                replace: true,
                restrict: 'E',
                controller: FontsCtrl,
                controllerAs: 'fontsCtrl'
        });

    function FontsCtrl($attrs, PackageStore) {
        var fontsCtrl = this;

        fontsCtrl.title = $attrs.blockTitle;

        fontsCtrl.temp = {
          value: "",
          class: ""
        };

        fontsCtrl.getCards = function() {
            return PackageStore.getByType($attrs.blockType);
        };

        fontsCtrl.addCard = function() {
          if(fontsCtrl.temp.value && fontsCtrl.temp.class) {
            PackageStore.saveByType($attrs.blockType, angular.copy(fontsCtrl.temp));
            fontsCtrl.temp = {};
          }
        };

    }


})(angular);
