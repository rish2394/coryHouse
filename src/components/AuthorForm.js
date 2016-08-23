"use strict";
var React = require('react');
var Input = require('./textInput');

var AuthorForm = React.createClass({
    render: function(){
      console.log('in author form');
      return (
          <form>

                 <Input
                       name="firstName"
                       label='FirstName'
                       onChange={this.props.onChange}
                       value={this.props.author.firstName}/>
                <br/>

                <Input
                       name='lastName'
                       label='LastName'
                       onChange={this.props.onChange}
                       value={this.props.author.lastName}/>
                <br/>
                <input type='submit' value='save' className='btn btn-success' onClick={this.props.onSave}/>
          </form>
      );
    }
});

module.exports = AuthorForm;
