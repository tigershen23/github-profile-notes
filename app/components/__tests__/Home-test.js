import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import shallowRender from "../../utils/test/shallowRender"
import ShallowTestUtils from "react-shallow-testutils"

let Home = require('../Home');

describe("Home", function() {
  describe("structure", function() {
    beforeEach(function() {
      this.result = shallowRender(<Home />)
    })

    it("renders an h2 with search prompt", function() {
      let text = this.result.props.children

      expect(this.result.type).toEqual("h2")
      expect(text).toMatch("Search by GitHub Username")
    })
  })
})
