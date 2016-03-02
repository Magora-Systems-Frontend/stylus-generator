(function (angular) {
    'use strict';

    angular
        .module('application.package', [
            'lbServices',
            'directive.styleBlock'
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
    function PackageCtrl(Packages, $stateParams, $q) {
        var packageCtrl = this;


        Packages.findById({id: $stateParams.id}, function(data){
            packageCtrl.package = data;
        });


        packageCtrl.packageNew = {
            class: "",
            value: ""
        };

        packageCtrl.packageNewSecondary = {
            class: "",
            value: ""
        };

        packageCtrl.packageNewFont = {
            class: "",
            value: ""
        };

        packageCtrl.getStyleBlock = function(type) {
            console.log(type);
            return this.package[type];
        };




        // Method for working with colours
        packageCtrl.addColourPrimary = function() {
            // send to factory
            var temp = packageCtrl.getColourPrimary();
            // add new information
            temp.push(packageCtrl.packageNew);
            // save new version of project
            packageCtrl.package.colour["primary"] = temp;
            // clear object
            packageCtrl.packageNew = {};
        };

        packageCtrl.addColourSecondary = function() {
            // send to factory
            var temp = packageCtrl.getColourSecondary();
            // add new information
            temp.push(packageCtrl.packageNewSecondary);
            // save new version of project
            packageCtrl.package.colour["secondary"] = temp;
            // clear object
            packageCtrl.packageNewSecondary = {};
        };

        packageCtrl.getColourPrimary = function() {
           return packageCtrl.package.colour["primary"];
        };

        packageCtrl.getColourSecondary = function() {
            return packageCtrl.package.colour["secondary"];
        };

        // -- Fonts

        packageCtrl.getFonts = function() {
            return packageCtrl.package.fonts["family"];
        };

        packageCtrl.addFonts= function() {
            var temp, testTemp;
            // send to factory
            temp = ((testTemp = packageCtrl.getFonts()) != undefined ? testTemp : []);
            // add new information
            temp.push(packageCtrl.packageNewFont);
            // save new version of project
            packageCtrl.package.fonts["family"] = temp;
            // clear object
            packageCtrl.packageNewFont = {};
        };


        packageCtrl.fontSize = {

        };



        // --- Borders

        packageCtrl.newBorder = {
            size: "14",
            class: "border-example"
        }
    }


})(angular);