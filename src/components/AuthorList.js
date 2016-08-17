"use strict";
var React = require('react');

var AuthorList = React.createClass({
    render: function(){

      var author = this.props.author;
      return (
        <div>
          <tr>
              <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
              <td>{author.firstName} {author.lastName}</td>
         </tr>
        </div>
     );
    }
});
module.exports = AuthorList;
