/* jshint node:true */
"use strict";

// var Utils = require("./controllers/utils");
// var Home = require("./controllers/home");
var ReactCtrl = require("./controllers/react");


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
    method:'GET',
    path:'/{path*}',
    handler: ReactCtrl
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