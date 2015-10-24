import React from "react/addons"
let expect = require('expect');
let stubRouterContext = require("../../utils/stubRouterContext")

let SearchGithub = require('../SearchGithub');
let { TestUtils } = React.addons

describe("root", function() {
  let Subject = stubRouterContext(SearchGithub, {}, {})
  beforeEach(function() {

    this.TestUtils = TestUtils
    this.renderer = TestUtils.createRenderer()
    this.renderer.render(<SearchGithub />)
    this.renderOutput = this.renderer.getRenderOutput()
  })

  it("renders without problems", function() {
    expect(this.renderOutput).toExist()
  });
})
