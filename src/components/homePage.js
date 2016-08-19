"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
      render: function(){
           return (
                 <div className="jumbotron">
                   <h1>Pluralsight Admin</h1>
                   <p>React,React Router,&Flux for ultra responsive web apps</p>
                   <Link to="/about" className="btn btn-primary btn-large">Learn More</Link>
                 </div>

           );
      }
});

module.exports = Home;
