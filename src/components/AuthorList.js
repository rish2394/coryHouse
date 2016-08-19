"use strict";
var React = require('react');
var Link = require('react-router').Link;
var AuthorList = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired
  },
    render: function(){

      var author = this.props.author;
      return (
          <tr>
              <td><Link to={'/#authors/' + author.id}>{author.id}</Link></td>
              <td>{author.firstName} {author.lastName}</td>
         </tr>

     );
    }
});
module.exports = AuthorList;
