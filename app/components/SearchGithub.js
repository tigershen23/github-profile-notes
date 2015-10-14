/**
 * @jsx React.DOM
 */

import React from "react"

class SearchGithub extends React.Component {
  handleSubmit() {
    var router = this.context.router
    var usernameNode = this.refs.username.getDOMNode()
    var username = usernameNode.value
    usernameNode.value = ""
    router.transitionTo("profile", {username: username})
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input className="form-control" type="text" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
}

SearchGithub.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default SearchGithub
