/* jshint node:true */
"use strict";

var React = require("react/addons");
var ReactApp = React.createFactory(require("../../src/app.jsx"));

var handler = function(req, reply){
  var reactHtml = React.renderToString(ReactApp({}));
  reply(reactHtml);
}

module.exports = handler;