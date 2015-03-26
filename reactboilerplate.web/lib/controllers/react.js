(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.reactctr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/server/controllers/react.js":[function(require,module,exports){
/* jshint node:true */
"use strict";

var React = require("react/addons");
var Router = require("react-router");

var ReactRoutes = require("../../client/router.jsx");
var Html = require("../../client/components/common/html.jsx");

var handler = function handler(req, reply) {
  var serveurl = req.params.path;

  if (!serveurl) serveurl = "/";else serveurl = "/" + serveurl;

  if (/\.ico$/.test(serveurl)) {
    return reply("favicon");
  }

  Router.run(ReactRoutes, serveurl, function (Handler, state) {

    var isNotFound = state.routes.some(function (el) {
      return el.name === "not-found";
    });

    var title = "Server page";
    var markup = React.renderToString(React.createElement(Handler, null));
    var html = React.renderToStaticMarkup(React.createElement(Html, { title: title, markup: markup }));

    if (isNotFound) reply(html).code(404);else reply(html);
  });
};

module.exports = handler;


},{"../../client/components/common/html.jsx":"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/common/html.jsx","../../client/router.jsx":"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/router.jsx","react-router":false,"react/addons":false}],"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/app.jsx":[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Layout = _interopRequire(require("./components/common/layout.jsx"));

var ReactRouter = _interopRequire(require("react-router"));

var RouteHandler = ReactRouter.RouteHandler;

var app = React.createClass({
  displayName: "app",

  render: function render() {
    return React.createElement(
      Layout,
      null,
      React.createElement(
        "h1",
        null,
        " Hai Dunia geronimo? keep now! "
      ),
      React.createElement(RouteHandler, null)
    );
  }
});

module.exports = app;


},{"./components/common/layout.jsx":"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/common/layout.jsx","react":false,"react-router":false}],"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/about.jsx":[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Layout = _interopRequire(require("./common/layout.jsx"));

var app = React.createClass({
  displayName: "app",

  render: function render() {
    return React.createElement(
      Layout,
      null,
      React.createElement(
        "h1",
        null,
        " Hai About US! "
      )
    );
  }
});

module.exports = app;


},{"./common/layout.jsx":"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/common/layout.jsx","react":false}],"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/common/footer.jsx":[function(require,module,exports){
"use strict";

var React = require("react");

var footer = React.createClass({
  displayName: "footer",

  render: function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "small-12 medium-6 columns text-left" },
        "© ",
        new Date().getFullYear(),
        ". Products of",
        React.createElement(
          "a",
          { href: "#" },
          " APPNAME "
        )
      ),
      React.createElement(
        "div",
        { className: "small-12 medium-6 columns text-right" },
        "APPNAME by Niko Darmawan"
      )
    );
  }

});

module.exports = footer;


},{"react":false}],"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/common/html.jsx":[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var html = React.createClass({
  displayName: "html",

  render: function render() {
    return React.createElement(
      "html",
      null,
      React.createElement(
        "head",
        null,
        React.createElement(
          "title",
          null,
          this.props.title
        ),
        React.createElement("link", { rel: "stylesheet", href: "/assets/css/main.css" })
      ),
      React.createElement(
        "body",
        null,
        React.createElement("div", { id: "react-root", dangerouslySetInnerHTML: { __html: this.props.markup } }),
        React.createElement("script", { type: "text/javascript", src: "/assets/js/main.js" })
      )
    );
  }

});

module.exports = html;


},{"react":false}],"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/common/layout.jsx":[function(require,module,exports){
"use strict";

var React = require("react");
var Router = require("react-router");

var Footer = require("./footer.jsx");
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var layout = React.createClass({
  displayName: "layout",

  render: function render() {
    return React.createElement(
      "div",
      { className: "layout" },
      React.createElement(
        "div",
        { className: "main-wrapper" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              React.createElement(
                Link,
                { to: "app" },
                "Home"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                Link,
                { to: "about" },
                "About"
              )
            )
          )
        ),
        this.props.children,
        React.createElement("div", { className: "footer-push" })
      ),
      React.createElement(
        "div",
        { className: "footer" },
        React.createElement(Footer, null)
      )
    );
  }

});

module.exports = layout;


},{"./footer.jsx":"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/common/footer.jsx","react":false,"react-router":false}],"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/common/notfound.jsx":[function(require,module,exports){
"use strict";

var React = require("react");
var Layout = require("./layout.jsx");

var notfound = React.createClass({
  displayName: "notfound",

  render: function render() {
    return React.createElement(
      Layout,
      null,
      React.createElement(
        "h1",
        null,
        " Page Not Found! "
      )
    );
  }

});

module.exports = notfound;


},{"./layout.jsx":"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/common/layout.jsx","react":false}],"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/router.jsx":[function(require,module,exports){
"use strict";

var React = require("react");
var Router = require("react-router");

var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

var App = require("./app.jsx");
var About = require("./components/about.jsx");
var NotFound = require("./components/common/notfound.jsx");

var routes = React.createElement(
    Route,
    null,
    React.createElement(Route, { name: "app", path: "/", handler: App }),
    React.createElement(Route, { name: "about", path: "/about", handler: About }),
    React.createElement(NotFoundRoute, { name: "not-found", handler: NotFound })
);

module.exports = routes;


},{"./app.jsx":"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/app.jsx","./components/about.jsx":"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/about.jsx","./components/common/notfound.jsx":"/Users/nikodarmawan/Developments/NodeDevelopments/iojs-hapi-react-boilerplate/reactboilerplate.web/src/client/components/common/notfound.jsx","react":false,"react-router":false}]},{},["./src/server/controllers/react.js"])("./src/server/controllers/react.js")
});
//# sourceMappingURL=react.js.map