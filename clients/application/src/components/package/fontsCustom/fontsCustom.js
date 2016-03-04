(function (angular) {
    'use strict';

    angular
        .module('component.fontsCustom', [
            'factory.packageStore'
        ])
        .component('fontsCustom', {
                templateUrl: 'components/package/fontsCustom/fontsCustom.html',
                replace: true,
                restrict: 'E',
                controller: FontsCustomCtrl,
                controllerAs: 'fontsCustomCtrl'
        });

    function FontsCustomCtrl($attrs, PackageStore) {
        var fontsCustomCtrl = this;

        fontsCustomCtrl.title = $attrs.blockTitle;

        fontsCustomCtrl.temp = {
          value: "",
          class: ""
        };

        fontsCustomCtrl.getCards = function() {
            return PackageStore.getByType($attrs.blockType);
        };

        fontsCustomCtrl.addCard = function() {
            PackageStore.saveByType($attrs.blockType, angular.copy(fontsCustomCtrl.temp));
            fontsCustomCtrl.temp = {};
        };

    }


})(angular);
