"use strict";
//This is just a way to mock out an API to pretend that we're interacting with server
//This file is mocking a web API by hitting hard coded data
var authors = require('./authorData').authors;
var _ = require('lodash');

//This could be performed on the server in a real app.Just stubbing in

var _generateId = function(author){
  return authors.firstName.toLowerCase() + '-' + authors.lastName.toLowerCase();
};

var _clone = function(item){
  return JSON.parse(JSON.stringify(item));
};

var AuthorAPI = {

  getAllAuthors: function(){
    return _clone(authors);
  },
  getAuthorById: function(id){
    var author = _.find(authors, {id: id});
    return _clone(author);
  },
  saveAuthor: function(author){
    //Pretend an AJAX calll to web API is made here
    console.log("Pretend this just saved the author to the DB via AJAX call");

    if(authors.id){
      var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
      authors.splice(existingAuthorIndex, 1, author);
    }else{
      author.id = _generateId(author);
      authors.push(author);
    }
    return _clone(author);
  },
  deleteAuthor: function(id){
    console.log('Pretend this just delete tge author from the DB via an AJAX call');
    _.remove(authors, {id: id});
  }
};
module.exports = AuthorAPI;
