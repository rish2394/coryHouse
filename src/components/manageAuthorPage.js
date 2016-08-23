'use strict';
var React = require('react');
var AuthorForm = require('./AuthorForm');
var AuthorAPI = require('../mockAPI/authorAPI');
var Router = require('react-router');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

      mixins: [
             Router.Navigation
      ],

      getInitialState: function(){
        return {
            author: {id: '', firstName: '', lastName: ''},
            error: {}
        };
      },
      authorFormIsValid: function(){
             var isValid = true;
             console.log('inside authorFormIsValid');
             this.state.error = {};
             if(this.state.author.firstName < 3){
                    this.state.error.firstName = 'first name atleast 3 characters';
                    isValid = false;
             }
             if(this.state.author.lastName < 3){
                    this.state.error.lastname = 'last name atleast 3 characters';
                    isValid = false;
             }
             this.setState({error: this.state.error});
             return isValid;
      },
      _onSave: function(event){
           event.preventDefault();
           if(!this.authorFormIsValid()){
               return;
           }
           AuthorAPI.saveAuthor(this.state.author);
           toastr.success('Author saved');
           this.transitionTo('authors');
      },

     _onChange: function(event){
           console.log('inside _onChange function in manageAuthorPage');
           var field = event.target.name;
           var value = event.target.value;
           this.state.author[field] = value;
           return this.setState({author: this.state.author});
      },

      render: function(){
        return (
          <div>
              <h1>Manage Author</h1>
              <AuthorForm author={this.state.author} onChange={this._onChange} onSave={this._onSave} error={this.state.error} />
          </div>

        );
      }
});

module.exports = ManageAuthorPage;
