import React from "react"
import TestUtils from "react-addons-test-utils"
import shallowRender from "../../utils/test/shallowRender"
import ShallowTestUtils from "react-shallow-testutils"

let { findWithType } = ShallowTestUtils
let SearchGithub = require('../SearchGithub');

describe("root", function() {
  beforeEach(function() {
    this.result = shallowRender(<SearchGithub />, { router: React.PropTypes.func })
  })

  it("renders without error", function() {
    expect(this.result).toBeDefined()
  })

  it("renders with the correct structure", function() {
    expect(this.result.type).toEqual("div")

    let form = findWithType(this.result, "form")
    let usernameInput = findWithType(form, "input")
    expect(usernameInput.ref).toEqual("username")

    let submitButton = findWithType(form, "button")
    expect(submitButton.props.children).toEqual("Search Github")
  });
})
