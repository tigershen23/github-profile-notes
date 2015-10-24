import React from "react"
import TestUtils from "react-addons-test-utils"
//let expect = require('expect');

let SearchGithub = require('../SearchGithub');

describe("root", function() {
  beforeEach(function() {
    this.TestUtils = TestUtils
    this.renderer = TestUtils.createRenderer()
    this.renderer.render(<SearchGithub />, { router: React.PropTypes.func })
    this.result = this.renderer.getRenderOutput()
  })

  it("renders without error", function() {
    expect(this.result).toBeDefined()
  })

  it("renders with the correct structure", function() {
    expect(this.result.type).toEqual("div")

    let usernameInput = this.result.props.children.props.children[0].props.children
    expect(usernameInput.type).toEqual("input")
    expect(usernameInput.ref).toEqual("username")

    let submitButton = this.result.props.children.props.children[1].props.children
    expect(submitButton.type).toEqual("button")
    expect(submitButton.props.children).toEqual("Search Github")
  });
})
