/**
 * @jsx React.DOM
 */

var React = require('react');

var AddNote = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },

  handleSubmit: function() {
    var noteNode = this.refs.note.getDOMNode();
    var newNote = noteNode.value;
    noteNode.value = '';
    this.props.addNote(newNote);
  },

  render: function() {
    return (
      <div className="input-group">
        <input className="form-control" type="text" ref="note" placeholder="Add New Note" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </span>
      </div>
    );
  }

});

module.exports = AddNote;
