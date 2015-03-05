/* jshint node:true */
'use strict';

var appconf = {
  servers:{
    api:{
      host:"0.0.0.0",
      port:3000
    },
    web:{
      host:"0.0.0.0",
      port:3100
    }
  },
  dbconf:{
    mongo:{
      main:"mongodb://127.0.0.1/koncodewe"
    }
  },
  dbs:{}
};

module.exports = appconf;