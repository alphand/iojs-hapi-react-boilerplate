var React = require('react');
var Router = require('react-router');
var Routes = require('./router.jsx');

document.addEventListener('DOMContentLoaded', function(e){
  Router.run(Routes, Router.HistoryLocation, function(Handler, state){
    var reactRoot = document.getElementById("react-root");
    React.render(<Handler />, reactRoot);
  });
})
