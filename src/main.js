var jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage.js');
var About = require('./components/aboutPage.js');
var Header = require('./components/header.js');
var AuthorPage = require('./components/authorPage.js');
var Main = require('./components/Main.js');
var {Link, IndexRoute, Router, Route, hashHistory} = require('react-router');
var NotFoundPage = require('./components/NotFoundPage.js');
var Redirect = require('react-router').Redirect;
var ManageAuthorPage = require('./components/manageAuthorPage.js');

ReactDOM.render(
                <Router history={hashHistory} >
                  <Route path='/' component={Main}>
                     <IndexRoute component={Home}/>
                     <Route path="authors" component={AuthorPage}/>
                     <Route path="about" component={About}/>
                     <Route path='addAuthor' component={ManageAuthorPage}/>
                     <Redirect from='awthors' to='authors'/>
                     <Redirect from='about-us' to='about'/>
                     <Redirect from='about/*' to='about'/>
                     <Route path="*" component={NotFoundPage}/>
                  </Route>

                </Router>,document.getElementById('app')
);
