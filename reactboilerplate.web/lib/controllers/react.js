/* jshint node:true */
"use strict";

var React = require("react/addons");
var Router = require("react-router");

var ReactRoutes = require("./app-routes");

var handler = function(req, reply){
  var serveurl = req.params.path;

  if(!serveurl) 
    serveurl = "/";
  else
    serveurl = "/" + serveurl;

  console.log("serverul", serveurl);

  Router.run(ReactRoutes, serveurl, function(Handler, state){

    let isNotFound = state.routes.some(function(el){
      return el.name === 'not-found';
    });

    var html = React.renderToStaticMarkup(<Handler/>);

    if(isNotFound)
      reply(html).code(404);
    else
      reply(html);
  });
}

module.exports = handler;