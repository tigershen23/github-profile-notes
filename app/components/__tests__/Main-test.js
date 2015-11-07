import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import shallowRender from "../../utils/test/shallowRender"
import ShallowTestUtils from "react-shallow-testutils"

let { Simulate, renderIntoDocument } = TestUtils
let { findWithType } = ShallowTestUtils
let Main = require('../Main');
let SearchGithub = require('../SearchGithub');

describe("Main", function() {
  describe("structure", function() {
    beforeEach(function() {
      this.result = shallowRender(<Main />)
    })

    it("renders as a div with class main-container", function() {
      expect(this.result.type).toEqual("div")
      expect(this.result.props.className).toEqual("main-container")
    })

    it("renders a SearchGithub component", function() {
      let searchComponent = findWithType(this.result, SearchGithub)

      expect(searchComponent).toBeDefined()
    })
  })
})

