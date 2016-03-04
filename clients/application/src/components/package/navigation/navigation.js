(function (angular) {
    'use strict';

    angular
        .module('component.navigation', [
        ])
        .component('navigation', {
            templateUrl: 'components/package/navigation/navigation.html',
            replace: true,
            restrict: 'E',
            controller: NavCtrl,
            controllerAs: 'navCtrl'
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
