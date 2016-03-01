const fs = require('fs');

module.exports = function(Packages) {

    // Method for saving data to file
    Packages.saveToFile = function(type, packageId, cb) {
      var regType = /scss,less,styl/i,
          response;

      // Validation type of require
      // if(regType.test(type)) {

      if(type === "scss" || type === "less" || type === "styl") {
        var tempSign;

        switch(type) {
          case 'scss' :
              tempSign = "$";
              break;
          case 'less' :
              tempSign = "@";
              break;
          case 'styl' :
              tempSign = false;
              break;
        }

        // 200, link to file
        response = savePackageToFile(tempSign);
      }
      else {
        // 404
        response = "Error, try latter";
      }

      // Create scss, less or styl file

      function savePackageToFile(typeSign) {
        // D:\Project\generator\common\models
        // D:\Project\generator\storage\:id\scss
        // create folder and file
        // get package from database by id
        var link,
            path = __dirname + "\\packages\\" + packageId + "\\style." + type;
            tempPackage = {
              colours : [
                {
                  propertyName: "primary",
                  value : "#eee"
                },
                {
                  propertyName: "primary1",
                  value : "#000"
                },
                {
                  propertyName: "primary2",
                  value : "#fff"
                }
              ]
            };


        // create file
        if(typeSign) {
          var data = "";
          console.log(path);
          // if file exists and it's last version


          for(var elem in tempPackage) {
            if(typeof elem === "array") {
              for(var tempElem in elem) {
                console.log(tempElem);
              }
            }
          }


          fs.appendFile(path, 'data to append', function(error){
              if (error) throw error;
              console.log('The "data to append" was appended to file!');
          });
          // plunk all elements in package's object
        }

        // get links on file

          // send response (link to file)
          cb(null, response)

      }

    };

    // Method for getting data by id
    Packages.getById = function(id, cb) {
        var p1 = new Promise(
            function(resolve, reject) {
                resolve(Packages.findById(id))
            });

        p1.then(
            function(data) {
                console.log("work, sent to server");
                cb(null, data);
            });

    };

    Packages.remoteMethod(
      'saveToFile', {
        accepts: [{arg: 'type', type: 'string'}, {arg: 'packageId', type: 'string'}],
        http: {path: '/tofile', verb: 'get'},
        returns: {arg: 'file', type: 'file'}
      }
    );

    Packages.remoteMethod(
        'getById', {
            accepts: [{arg: 'id', type: 'string'}],
            http: {path: '/getById', verb: 'get'},
            returns: {arg: 'package', type: 'object'}
        }
    );
};
