/**
 * @jsx React.DOM
 */

var React = require('react');
var NotesList = require('./NotesList.js');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },

  render: function() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        User Profile <br />
        Username: {this.props.username} <br />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }

});

module.exports = Notes;
