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

        // -- Utils
        var getPartOfObject = function(obj, type) {
            var types = type.split(",");

            for(var i = 0, length = types.length; i < length; i++) {
                obj = obj[types[i].trim()] || [];
            }
            return obj;
        };

        var setPartToObject = function(data, type) {
            var types = type.split(",");
            var tempObj = {};
            var newObj = tempObj;

            // create new object, which will be extend our data
            for(var i = 0, length = types.length; i < length - 1; i++) {
                tempObj[types[i].trim()] = {};
                tempObj = tempObj[types[i].trim()];
            }

            // most nested element hold our data
            tempObj = tempObj[types[length-1].trim()] = data;

            console.log(packageStore.elem, newObj);

            // save
            angular.merge(packageStore.elem, newObj);
        };


        // -- Api

        // Set current package for working
        packageStore.setElem = function(id) {
            Packages.findById({id: id}, function(data){
                packageStore.elem = data;
            });
        };

        // Get part of package for working in directives
        packageStore.getByType = function(type) {
            return getPartOfObject(packageStore.elem, type);
        };

        // Save part of package
        packageStore.saveByType = function(type, data) {
            // create new array, which hold all elements
            // it's array
            var existArray = getPartOfObject(packageStore.elem, type);


            existArray.push(data);

            setPartToObject(existArray, type);

           // add new to file
        };

        // Getting all element of package
        packageStore.getElems = function() {
            return packageStore.elems;
        };

        // Getting current element
        packageStore.getElem = function() {
            return packageStore.elem;
        };

        // Save current package in file with type
        packageStore.saveToFile = function(type) {
            console.log("Try to save package to file")
        };

        return {
            getByType: packageStore.getByType,
            saveByType: packageStore.saveByType,
            getElems: packageStore.getElems,
            setElem: packageStore.setElem,
            getElem: packageStore.getElem
        }
    }

})(angular);
