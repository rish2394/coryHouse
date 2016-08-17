"use strict";
var React = require('react');
var Link = require('react-router');
var IndexLink = require('react-router');

var Header = React.createClass({
     render: function(){
        return (
             <div className="navbar navbar-default">
               <div className="container-fluid">
                  <a to="/" className="navbar-brand">
                      <img src="images/pluralsight-logo.png"/>
                  </a>
                  <ul className="nav navbar-nav">
                     <li><a href="/">Home</a></li>
                     <li><a href="/#234">About</a></li>
                     <li><a href="/#authors">Authors</a></li>
                  </ul>
               </div>
             </div>
        );
     }
});

module.exports = Header;
