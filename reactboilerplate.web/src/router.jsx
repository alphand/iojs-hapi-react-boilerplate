var Router = require('react-router');
var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

var App = require("./app.jsx");



var routes = (
  <Route handler={App}>
  </Route>
)