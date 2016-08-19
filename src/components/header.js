"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
     render: function(){
        return (
             <div className="navbar navbar-default">
               <div className="container-fluid">
                  <Link to="/" className="navbar-brand">
                      <img src="images/pluralsight-logo.png"/>
                  </Link>
                  <ul className="nav navbar-nav">
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/about">About</Link></li>
                     <li><Link to="/authors">Authors</Link></li>
                  </ul>
               </div>
             </div>
        );
     }
});

module.exports = Header;
