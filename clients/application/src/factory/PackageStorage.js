(function (angular) {
    'use strict';

    angular
        .module('factory.packageStore', [
            'lbServices'
        ])
        .factory('PackageStore', PackageStore);

    function PackageStore(Packages) {

        var packageStore = this;

        packageStore.elems = Packages.find();
        packageStore.elem = {};

        // Set current package for working
        packageStore.setElem = function(id) {
            Packages.findById({id: id}, function(data){
                packageStore.elem = data;
            });
        };

        // Get part of package for working in directives
        packageStore.getByType = function(type) {
            console.log(type);
        };

        // Getting all element of package
        packageStore.getElems = function() {
            return packageStore.elems;
        };

        // Save current package in file with type
        packageStore.saveToFile = function(type) {
            console.log("Try to save package to file")
        };

        return {
            getByType: packageStore.getByType,
            getElems: packageStore.getElems,
            setElem: packageStore.setElem
        }
    }

})(angular);
