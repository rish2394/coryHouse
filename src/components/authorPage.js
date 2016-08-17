"use strict";
var React = require('react');
var AuthorAPI = require('../mockAPI/authorAPI');
var AuthorList = require('./AuthorList');

var AuthorPage = React.createClass({
    getInitialState: function(){
      return {
         authors: []
      };
    },
    componentWillMount: function(){
      this.setState({
         authors: AuthorAPI.getAllAuthors()
      });
    },
    render: function(){
         var authorsData = [];
        console.log('hello');
         this.state.authors.forEach(function(author){
            authorsData.push(<AuthorList key={author.id} author={author}></AuthorList>);
         });

    return (
      <div>
          <h1>Authors</h1>
          <table className='table'>
              <thead>
                  <th>ID</th>
                  <th>Name</th>
              </thead>
              <tbody>
                  {authorsData}
              </tbody>
          </table>
      </div>
    );
  }
});

module.exports = AuthorPage;
