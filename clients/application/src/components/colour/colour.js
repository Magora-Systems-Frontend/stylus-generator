(function (angular) {
    'use strict';

    angular
        .module('component.colour', [
            'factory.packageStore'
        ])
        .component('colour', {
                templateUrl: 'components/colour/colour.html',
                replace: true,
                restrict: 'E',
                controller: ColourCtrl,
                controllerAs: 'colourCtrl'
        });

    function ColourCtrl($attrs, PackageStore) {
        var colourCtrl = this;

        colourCtrl.title = $attrs.blockTitle;

        colourCtrl.temp = {
          value: "",
          class: ""
        };

        colourCtrl.getCards = function() {
            return PackageStore.getByType($attrs.blockType);
        };

        colourCtrl.addCard = function() {
            PackageStore.saveByType($attrs.blockType, angular.copy(colourCtrl.temp));
            colourCtrl.temp = {};
        };

    }


})(angular);
