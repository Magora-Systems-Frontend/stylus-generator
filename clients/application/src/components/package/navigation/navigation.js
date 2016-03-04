(function (angular) {
    'use strict';

    angular
        .module('component.navigation', [
            'factory.packageStore'
        ])
        .component('navigation', {
            templateUrl: 'components/package/navigation/navigation.html',
            replace: true,
            restrict: 'E',
            controller: NavCtrl,
            controllerAs: 'navCtrl'
        });

    function NavCtrl(PackageStore) {
        var navCtrl = this;

        navCtrl.objectType = ".styl";

        // Action for creating file
        navCtrl.actionCreateFile = function(){
            PackageStore.saveToFile();
        };

        // Action for saving file
        navCtrl.actionSavePackage = function() {
            PackageStore.saveToDB();
        };


    }


})(angular);
