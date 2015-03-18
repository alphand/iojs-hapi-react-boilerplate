/* jshint node:true */
"use strict";

var React = require("react/addons");
var Router = require("react-router");

var ReactRoutes = require('../../client/router.jsx');
var Html = require('../../client/components/common/html.jsx');

var handler = function(req, reply){
  var serveurl = req.params.path;   

  if(!serveurl) 
    serveurl = "/";
  else
    serveurl = "/" + serveurl;

  if(/\.ico$/.test(serveurl)){
    return reply("favicon");
  }

  Router.run(ReactRoutes, serveurl, function(Handler, state){

    let isNotFound = state.routes.some(function(el){
      return el.name === 'not-found';
    });

    var title = "Server page";
    var markup = React.renderToString(<Handler/>);
    var html = React.renderToStaticMarkup(<Html title={title} markup={markup} />)

    if(isNotFound)
      reply(html).code(404);
    else
      reply(html);
  });
}

module.exports = handler;