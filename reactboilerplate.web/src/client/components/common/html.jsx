import React from "react"

var html = React.createClass({

  render: function() {
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
          <link rel="stylesheet" href="/assets/css/main.css" />
        </head>
        <body>
          <div id="react-root" dangerouslySetInnerHTML={{__html: this.props.markup}} ></div>
          <script type="text/javascript" src="/assets/js/main.js"></script>
        </body>
      </html>
    );
  }

});

export default html