var jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage.js');
var About = require('./components/aboutPage.js');
var Header = require('./components/header.js');
var AuthorPage = require('./components/authorPage.js');
var Main = require('./components/Main.js');
var {Link, IndexRoute, Router, Route, hashHistory} = require('react-router');
var NotFoundPage=require('./components/NotFoundPage.js');


ReactDOM.render(
                <Router history={hashHistory} >
                  <Route path='/' component={Main}>
                     <IndexRoute component={Home}/>
                     <Route path="authors" component={AuthorPage}/>
                     <Route path="about" component={About}/>
                  </Route>
                  <Route status="404" path="*" component={NotFoundPage}></Route>
                </Router>,document.getElementById('app')
);
