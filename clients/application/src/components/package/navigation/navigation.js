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

    function NavCtrl(PackageStore, $attrs) {
        var navCtrl = this;

        navCtrl.objectType = ".styl";
        navCtrl.modeType = $attrs.dirType;


        // Action for creating file
        navCtrl.actionCreateFile = function(){
            PackageStore.saveToFile();
        };

        // Action for creating new package
        navCtrl.actionCreatePackage = function() {
          PackageStore.create();
        };

        // Action for saving package
        navCtrl.actionSavePackage = function() {
            PackageStore.saveToDB();
        };
    }

})(angular);
