/* jshint node:true */
"use strict";

var bunyan = require("bunyan");
var PrettyStream = require("bunyan-prettystream");

var prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

var log = bunyan.createLogger({
  name:"boilerplate-app",
  streams:[
    {
      type:'raw',
      stream:prettyStdOut
    }
  ] 
});

module.exports.logger = log;