var jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage.js');
var About = require('./components/aboutPage.js');
var Header = require('./components/header.js');
var AuthorPage = require('./components/authorPage.js');

(function(window){
        "use strict";
        var App = React.createClass({
               render: function(){
                    var Child;

                    switch(this.props.route){
                      case 'about' :
                                    Child = About;
                                    break;
                      case 'authors' :
                                    Child = AuthorPage;
                                    break;
                      default :
                                    Child = Home;
                    }

                    return (
                      <div>
                           <Header/>
                           <div className='container'>
                               <Child/>
                           </div>
                      </div>
                    );
               }
        });
        function render(){
                  var route = window.location.hash.substr(1);
                  console.log(route);
                  ReactDOM.render(<App route={route}/>, document.getElementById('app'));
        }
        window.addEventListener('hashchange', render);
        render();
})(window);
