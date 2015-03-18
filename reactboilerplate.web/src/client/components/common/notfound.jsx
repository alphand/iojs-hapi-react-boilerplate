var React = require('react');
var Layout = require('./layout.jsx');

var notfound = React.createClass({

  render: function() {
    return (
      <Layout> 
        <h1> Page Not Found! </h1>
      </Layout>
    );
  }

});

module.exports = notfound;