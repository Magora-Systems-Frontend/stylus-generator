(function (angular) {
    'use strict';

    angular
        .module('component.colour', [
            'factory.packageStore'
        ])
        .component('colour', {
                templateUrl: 'components/package/colour/colour.html',
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

        //
        colourCtrl.getCards = function() {
            var temp = PackageStore.getByType($attrs.blockType);

            return PackageStore.getByType($attrs.blockType);
        };

        // Method for adding color to package
        colourCtrl.addCard = function() {
            if(colourCtrl.temp.value && colourCtrl.temp.class) {
                PackageStore.saveByType($attrs.blockType, angular.copy(colourCtrl.temp));
                colourCtrl.temp = {};
            }
        };

        // Method for deleting color card from package
        colourCtrl.deleteCard = function(index) {
            var temp = PackageStore.getByType($attrs.blockType);
            temp.splice(index, 1);
        };

    }


})(angular);
