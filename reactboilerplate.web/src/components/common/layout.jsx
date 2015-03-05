var React = require('react');

var Footer = require("./footer.jsx");

var layout = React.createClass({

  render: function() {
    return (
      <div className="layout">
        <div className="main-wrapper">
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