import React from "react"
import TestUtils from "react-addons-test-utils"
let expect = require('expect');
let stubRouterContext = require("../../utils/stubRouterContext")

let SearchGithub = require('../SearchGithub');

describe("root", function() {
  let Subject = stubRouterContext(SearchGithub, {}, {})
  beforeEach(function() {
    this.TestUtils = TestUtils
    this.renderer = TestUtils.createRenderer()
    this.renderer.render(<SearchGithub />, { router: React.PropTypes.func })
  })

  it("renders without error", function() {
    let result = this.renderer.getRenderOutput()
    expect(result).toExist()
  })

  it("renders as a div", function() {
    let result = this.renderer.getRenderOutput()

    //debugger;
    expect(result.type).toEqual("div")
    expect(result.props.children)
    //<form onSubmit={this.handleSubmit.bind(this)}>
      //<div className="form-group col-sm-7">
        //<input className="form-control" type="text" ref="username" />
      //</div>
      //<div className="form-group col-sm-5">
        //<button type="submit" className="btn btn-block btn-primary">Search Github</button>
      //</div>
    //</form>
  });
})
