"use strict";
var React = require('react');
var AuthorAPI = require('../mockAPI/authorAPI');
var AuthorList = require('./AuthorList');
var Link = require('react-router').Link;
var AuthorPage = React.createClass({
    getInitialState: function(){
      return {
         authors: []
      };
    },
    componentDidMount: function(){
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
          <Link to='/addAuthor' className='btn btn-default'>Add Author</Link>
          <table className='table'>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
              </tr>
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
