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

  it("renders without problems", function() {
    let result = this.renderer.getRenderOutput()
    expect(result).toExist()
    expect(result.type).toEqual("div")
  });
})
