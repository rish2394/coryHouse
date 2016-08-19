"use strict";

var React = require('react');
var Header = require('./header');

var Main = React.createClass({
    render: function(){
      console.log("Hello from Main.js");
      return (
           <div>
                <Header/>
                <div className='container'>
                  {this.props.children}
                </div>
           </div>
      );
    }
});

module.exports = Main;
