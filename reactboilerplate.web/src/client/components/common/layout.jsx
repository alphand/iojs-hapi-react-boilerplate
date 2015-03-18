var React = require('react');
var Router = require('react-router');


var Footer = require("./footer.jsx");
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var layout = React.createClass({
  render: function() {
    return (
      <div className="layout">
        <div className="main-wrapper">
          <div>
            <ul>
              <li><Link to="app">Home</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
          
          {this.props.children}

          <div className="footer-push"></div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }

});

module.exports = layout;