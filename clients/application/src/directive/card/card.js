(function (angular) {
    'use strict';

    angular
        .module('directive.card', [
        ])
        .directive('card', function () {
            return {
                templateUrl: 'directive/card/card.html',
                replace: true,
                restrict: 'E',
                scope: true,
                bindToController: true,
                controller: cardCtrl,
                controllerAs: 'cardCtrl'
            }
        });

    function cardCtrl() {
        var cardCtrl = this;

    }


})(angular);
