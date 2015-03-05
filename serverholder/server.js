/* jslint node:true */
'use strict';

var Hapi          = require("hapi"),
    Path          = require("path"),
    Promise       = require("bluebird");

var goodOpts = {
  opsInterval: 1000,
  reporters:[
    {
      reporter: require("good-console"),
      args:[{log:'*', response:'*'}]
    }
  ]
};

var genManifest = function(config){
  var manifest = {
    pack:{
      app:{
        config:config,
        utils:config.utils
      }
    },  
    servers:[
      {
        host:config.servers.api.host,
        port:config.servers.api.port,
        options:{
          labels:['api']
        }
      },
      {
        host:config.servers.web.host,
        port:config.servers.web.port,
        options:{
          labels:['web']
        }
      }
    ],
    plugins:{
      'good':[{options:goodOpts}],
      '../../reactboilerplate.web':[{select:['web']}]
    }
  };
  return manifest;
};

var webplugin = function(server){
  var promise = new Promise(function(resolve, reject){
    var webserver = server.select('web');
    webserver.register({
      register:require("../reactboilerplate.web"),
      options:{}
    }, function(err){
      if(err) return reject(err);
      resolve(true);
    });

  });

  return promise;
}

var loadPlugins = function(server){
  var promise = new Promise(function(resolve, reject){
    webplugin(server)
      .then(function(){
        server.register({register:require('good'), options:goodOpts}, 
        function(err){ 
          if(err) reject(err); 
          resolve(true);
        });    
      })
  })
  return promise;
}

module.exports.load = function(config){
  var server = new Hapi.Server({
    app:{
      config:config,
      utils:config.utils
    }
  });
  var webserver = server.connection({host:config.servers.web.host, port:config.servers.web.port, labels:['web']});
  var apiserver = server.connection({host:config.servers.api.host, port:config.servers.api.port, labels:['api']});


  var packInit = function(){
    config.utils.logger.info("API Servers is up at "+ apiserver.info.uri + " on " + new Date());
    config.utils.logger.info("WEB Servers is up at "+ webserver.info.uri + " on " + new Date());
  };

  loadPlugins(server).then(function(){
    server.start(function(err){
      if(err) return Promise.reject(err);
      packInit();
      Promise.resolve(true);
    })  
  })
  .error(function(err){
    Promise.reject(err);
  })

  
};
