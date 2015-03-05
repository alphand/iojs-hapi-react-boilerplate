/* jshint node:true */
"use strict";

var Routes = require("./routes");


module.exports.register = function(server, option, next){

  var weblogger = server.settings.app.utils.logger.child({source:"web-server"});

  server.bind({
    config:server.app.config,
    logger:weblogger
  });

  var evHandReq = function(req, event, tags){
    if( tags.error ){
      weblogger.info("web server req log - error:", req.path, event);
    }
  };

  server.on("request", evHandReq);
  server.route(Routes.endpoints);

  server.log(['info'], "Boilerplate WEB Server ready "+ new Date());
  next();
};

module.exports.register.attributes ={
  pkg: require('../package.json')
};