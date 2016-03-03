(function (angular) {
    'use strict';

    angular
        .module('directive.navigation', [
        ])
        .directive('navigation', function () {
            return {
                templateUrl: 'directive/navigation/navigation.html',
                replace: true,
                restrict: 'E',
                scope: true,
                bindToController: true,
                controller: NavCtrl,
                controllerAs: 'navCtrl'
            }
        });

    function NavCtrl() {
        var navCtrl = this;

        navCtrl.objectType = ".styl";

        // Action for creating file
        navCtrl.actionCreateFile = function(){
            alert("create");
        };

        // Action for saving file
        navCtrl.actionSavePackage = function() {
            alert("save");
        }


    }


})(angular);
