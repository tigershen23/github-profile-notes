/**
 * @jsx React.DOM
 */

import React from "react"

class SearchGithub extends React.Component {
  handleSubmit() {
    const history = this.context.history
    const usernameNode = this.refs.username
    const username = usernameNode.value
    usernameNode.value = ""
    debugger;
    history.pushState(null, `/profile/${username}`)
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
  history: React.PropTypes.object.isRequired,
}

export default SearchGithub
