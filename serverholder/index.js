/* jshint node:true */
"use strict";
var env    = process.env.NODE_ENV || 'local';
var Config = require(__dirname + "/config/appconf-"+env);
var Server = require("./server");
var Mongo  = require("./servers/mongo");
var Utils  = require("./utils");

Config.utils = Utils;

Mongo.load(Config)
  .then(function(){
    Server.load(Config);
  })
  .then(function(){
    Config.utils.logger.info("Lock and Load: "+ new Date());
  })
  .error(function(err){
    console.log(err, err.message, err.stack);
  })
  .done();