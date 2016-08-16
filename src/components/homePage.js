"use strict"

var React = require('react');

var Home = React.createClass({
      render:function(){
           return(
             <div className="container">
                 <div className="jumbotron">
                   <h1>Pluralsight Admin</h1>
                   <p>React,React Router,&Flux for ultra responsive web apps</p>
                 </div>
            </div>
           );
      }
});

module.exports = Home;
