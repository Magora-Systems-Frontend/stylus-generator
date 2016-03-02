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


        styleBlockCtrl.temp = {
          value: "",
          class: ""
        };

        styleBlockCtrl.getCards = function() {
            PackageStore.getByType($attrs.blockType);
        };

        styleBlockCtrl.addCard = function() {
            console.log(styleBlockCtrl.temp);
        };


    }


})(angular);
