/* jshint node:true */
"use strict";

var ReactCtrl = require("./controllers/react");

var routes = [
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