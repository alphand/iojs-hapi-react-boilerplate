var React = require('react');
var Router = require('react-router');

var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link; 


var App = require("./app.jsx");
var NotFound = require("./components/common/notfound.jsx");


var routes = (
    <Route>
      <Route name="main" path="/" handler={App} >
        <DefaultRoute handler={App} />
      </Route>
      <NotFoundRoute name='not-found' handler={NotFound} />
    </Route>
);

module.exports = routes;