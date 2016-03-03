(function (angular) {
    'use strict';

    angular
        .module('directive.styleBlock', [
            'directive.card',
            'factory.packageStore'
        ])
        .directive('styleBlock', function () {
            return {
                templateUrl: 'directive/styleBlock/styleBlock.html',
                replace: true,
                restrict: 'E',
                scope: true,
                bindToController: true,
                controller: styleBlockCtrl,
                controllerAs: 'styleBlockCtrl'
            }
        });

    function styleBlockCtrl($attrs, PackageStore) {
        var styleBlockCtrl = this;

        styleBlockCtrl.title = $attrs.blockTitle;

        styleBlockCtrl.temp = {
          value: "",
          class: ""
        };

        styleBlockCtrl.getCards = function() {
            return PackageStore.getByType($attrs.blockType);
        };

        styleBlockCtrl.addCard = function() {
            PackageStore.saveByType($attrs.blockType, angular.copy(styleBlockCtrl.temp));
            styleBlockCtrl.temp = {};
        };

        PackageStore.setElem()


    }


})(angular);
