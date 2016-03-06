(function (angular) {
    'use strict';

    angular
        .module('factory.packageStore', [
            'lbServices'
        ])
        .factory('PackageStore', PackageStore);

    function PackageStore(Packages) {
        var packageStore = this;

        // -- Init
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

        // -- API

        // Set current package for working
        packageStore.setElem = function(id) {
            Packages.findById({id: id}, function(data){
                packageStore.elem = data;
            });
        };

        // Set default package
        packageStore.setDefault = function() {
            var tempPackage = {
                "name": "New package",
                "colour":{
                  "primary": [
                    {
                      "class": "blue",
                      "value": "#D4E157"
                    },
                    {
                      "class": "green",
                      "value": "#FFAB40"
                    },
                    {
                      "class": "brown",
                      "value": "#78909C"
                    },
                    {
                      "class": "blue",
                      "value": "#D4E157"
                    }
                  ],
                  "secondary": []
                },
                "fonts": {
                  "font-family": [],
                  "font-size": [],
                  "font-custom": []
                },
                "borders": {
                  "standart": [
                    {
                      "value": 14,
                      "class": "border"
                    }
                  ]
                }
            };

            packageStore.elem = tempPackage;
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
        };

        // Save by property
        packageStore.saveByProperty = function(property, value) {
          //console.log("Save, now" + property + " = " + value);
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

            // make new file for user
            var textFile = null,
                linkOnFile;

           // function of transforming data from object to text
            var generationData = function(type, data) {
              var tempData = "",
                  typeSign;

              switch (type) {
                case ".scss":
                      typeSign = "$";
                      break;
                case ".less":
                      typeSign = "@";
                      break;
                case ".styl":
                      typeSign = "";
                      break;
              }

              recordToString(data.colour["primary"]);
              recordToString(data.colour["secondary"]);
              recordToString(data.fonts["font-family"]);
              recordToString(data.fonts["font-size"]);
              recordToString(data.fonts["font-custom"]);
              recordToString(data.borders["standart"]);

              function recordToString(data) {
                if(data) {
                  data.forEach(function (item) {
                    tempData += typeSign + item.class + ": " + item.value + ";\n";
                  });
                }
              }

              return tempData;
          };
            // function for creating new file
            var makeTextFile = function (text) {
                var data = new Blob([text], {type: 'text/plain'});

                // If we are replacing a previously generated file we need to
                // manually revoke the object URL to avoid memory leaks.
                if (textFile !== null) {
                    window.URL.revokeObjectURL(textFile);
                }

                textFile = window.URL.createObjectURL(data);

                return textFile;
            };

            linkOnFile = makeTextFile(generationData(type, packageStore.elem));

            return linkOnFile;
        };

        // Save current page to data base
        packageStore.saveToDB = function() {
            Packages.update({where: {id: packageStore.elem.id}}, packageStore.elem, function(err, info){
                if(err) {
                    console.log(err);
                }
            });
        };

        // Create new package in data base
        packageStore.create = function() {
            Packages.create(packageStore.elem, function(err, info) {
              if(err) {
                console.log(err);
              }
              else {
                console.log(info);
              }
            });
        };

        return {
            getByType: packageStore.getByType,
            saveByType: packageStore.saveByType,
            saveByProperty: packageStore.saveByProperty,
            saveToFile: packageStore.saveToFile,
            saveToDB: packageStore.saveToDB,
            create: packageStore.create,
            getElems: packageStore.getElems,
            setElem: packageStore.setElem,
            setDefault: packageStore.setDefault,
            getElem: packageStore.getElem
        }
    }

})(angular);
