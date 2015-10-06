/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
  mixins: [Router.Navigation],
  handleSubmit: function() {
    var usernameNode = this.refs.username.getDOMNode();
    var username = usernameNode.value;
    usernameNode.value = '';
    this.transitionTo('profile', {username: username});
  },

  render: function() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input className="form-control" type="text" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    );
  }

});

module.exports = SearchGithub;
