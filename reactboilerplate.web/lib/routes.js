/* jshint node:true */
"use strict";

// var Utils = require("./controllers/utils");
// var Home = require("./controllers/home");


var routes = [
  {
    method:"GET",
    path:"/",
    handler:{
      file:{
        path:__dirname+"/statics/index.html"
      }
    }
  },
  {
    method:"GET",
    path:"/assets/{path*}",
    handler:{
      directory:{
        path:__dirname+"/statics/assets/"
      }
    }
  }
];

module.exports.endpoints = routes;