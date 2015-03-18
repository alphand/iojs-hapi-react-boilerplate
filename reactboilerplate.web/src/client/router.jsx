const React = require('react');
const Router = require('react-router');

const Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link; 


const App = require("./app.jsx");
const About = require("./components/about.jsx");
const NotFound = require("./components/common/notfound.jsx");

const routes = (
    <Route >
      <Route name="app" path="/" handler={App} />
      <Route name="about" path="/about" handler={About} />
      <NotFoundRoute name='not-found' handler={NotFound} />
    </Route>
);

export default routes