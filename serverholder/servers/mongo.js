/* jshint node:true */
"use strict";

var Promise = require("bluebird");
var mongoose = require("mongoose");
Promise.promisifyAll(mongoose);

var loadmongo = function(config){
  return new Promise(function(resolve, reject){
    var mongoconn = mongoose.createConnection(config.dbconf.mongo.main);
    config.dbs.mongo = {
      main:mongoconn
    };
    
    mongoconn.on("error", function(err){
      config.utils.logger.error("MongoDB error", err.message, err.stack);
      reject(err);
    });

    mongoconn.once("open", function(){
      config.utils.logger.info("MongoDB is Up on: "+ new Date());
      resolve(true);
    });  
  })
};

module.exports.load = loadmongo;