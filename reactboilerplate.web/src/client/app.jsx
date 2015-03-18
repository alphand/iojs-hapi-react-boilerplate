import React from "react";
import Layout from "./components/common/layout.jsx"
import ReactRouter from  "react-router";
let RouteHandler = ReactRouter.RouteHandler;

var app = React.createClass({
  render: function() {
    return (
      <Layout>
        <h1> Hai Dunia geronimo? keep now! </h1>
        <RouteHandler />
      </Layout>
    );
  }
});

export default app;