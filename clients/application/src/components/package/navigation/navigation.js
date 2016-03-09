(function (angular) {
    'use strict';

    angular
        .module('component.navigation', [
            'factory.packageStore',
            'directive.scrollTo'
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
        navCtrl.links = ['colour', 'fonts', 'borders'];


        // Action for creating file
        navCtrl.actionCreateFile = function(){
            var linkOnFile = PackageStore.saveToFile(navCtrl.objectType);

           window.location.assign(linkOnFile);
        };

        // Action for creating new package
        navCtrl.actionCreatePackage = function() {
          PackageStore.create();
        };

        // Action for saving package
        navCtrl.actionSavePackage = function() {
            PackageStore.saveToDB();
        };

        navCtrl.actionMoveToAnchor = function(e) {
            // set the location.hash to the id of
            // the element you wish to scroll to.
           // $location.hash('bottom');
            e.preventDefault();

            // call $anchorScroll()
            //$anchorScroll();
        }
    }

})(angular);
