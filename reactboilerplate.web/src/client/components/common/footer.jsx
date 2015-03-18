var React = require('react');

var footer = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="small-12 medium-6 columns text-left">
          &copy; { (new Date()).getFullYear() }. Products of
          <a href="#"> APPNAME </a>
        </div>

        <div className="small-12 medium-6 columns text-right">
          APPNAME by Niko Darmawan
        </div>
      </div>
    );
  }

});

module.exports = footer;