(function (angular) {
    'use strict';

    angular
        .module('application.package', [
            'lbServices'
        ])
        .config(config);

    // Config
    function config(
        $stateProvider
    ) {
        $stateProvider
            .state('application.package', {
                url: 'package/:id',
                templateUrl: 'application/package/package.html',
                controller: PackageCtrl,
                controllerAs: "packageCtrl"
            });

    }

    // Controller of page
    function PackageCtrl(Packages, $stateParams) {
      var packageCtrl = this;

      packageCtrl.package = Packages.findById($stateParams.id);

      packageCtrl.packageNew = {
        class: "",
        value: ""
      };

      // packageNew should be as new package object which hold
      // information about all new fields of app

      // try to use ng-repeate as package.["colours"]
      // it isn't cool, but it should improve our code
      // also, each + should work with one function, which has one arg
      // type of block, it's kind of addNew(package.["colour"])
      // which save information from new package to legacy package

      packageCtrl.getColourPrimary = function() {
        return packageCtrl.package.colour.primary;
      };

      // Add new colour, just for trigger without any params
      // All holds in angular factory

      packageCtrl.addColourPrimary = function() {

        // kind of validation
        if(true) {
          // send to factory
          var temp = packageCtrl.getColourPrimary();
          // add new information
          temp.push(packageCtrl.packageNew);
          packageCtrl.packageNew = temp;
        }
      };

      packageCtrl.getColourSecondary = function() {
        return packageCtrl.package.colour.secondary;
      };
    }


})(angular);
