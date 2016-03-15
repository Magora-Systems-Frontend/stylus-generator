(function (angular) {
    'use strict';

    angular
        .module('component.navigation', [
            'factory.packageStore',
            'factory.notifyStore',
            'directive.scrollTo'
        ])
        .component('navigation', {
            templateUrl: 'components/package/navigation/navigation.html',
            replace: true,
            restrict: 'E',
            controller: NavCtrl,
            controllerAs: 'navCtrl'
        });

    function NavCtrl(PackageStore, NotifyStore, $attrs) {
        var navCtrl = this;

        navCtrl.objectType = ".styl";
        navCtrl.modeType = $attrs.dirType;
        navCtrl.links = ['colour', 'fonts', 'borders'];


        // Action for creating file
        navCtrl.actionCreateFile = function(){
            var linkOnFile = PackageStore.saveToFile(navCtrl.objectType);

            window.location.assign(linkOnFile);
        };

        // Action for creating new package
        navCtrl.actionCreatePackage = function() {
            PackageStore.create(NotifyStore.push);
        };

        // Action for saving package
        navCtrl.actionSavePackage = function() {
            PackageStore.saveToDB(NotifyStore.push);
        };

        // Action for deleting package
        navCtrl.actionDeletePackage = function() {
            PackageStore.delete(NotifyStore.push);
        };


    }

})(angular);
