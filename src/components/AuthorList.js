"use strict";
var React = require('react');

var AuthorList = React.createClass({
    render: function(){

      var author = this.props.author;
      return (
        
          <tr>
              <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
              <td>{author.firstName} {author.lastName}</td>
         </tr>

     );
    }
});
module.exports = AuthorList;
