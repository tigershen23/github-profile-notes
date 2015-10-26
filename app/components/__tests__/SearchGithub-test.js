import React from "react"
import TestUtils from "react-addons-test-utils"
import shallowRender from "../../utils/test/shallowRender"
import ShallowTestUtils from "react-shallow-testutils"

let { Simulate, renderIntoDocument } = TestUtils
let { findWithType } = ShallowTestUtils
let SearchGithub = require('../SearchGithub');

describe("SearchGithub", function() {
  describe("structure", function() {
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
    })
  })

  describe("behavior", function() {
    beforeEach(function() {
      let stubContext = require("react-stub-context")
      SearchGithub = stubContext(SearchGithub, { router: React.PropTypes.func })
      this.component = renderIntoDocument(<SearchGithub />)
      this.componentDOM = () => React.findDOMNode(this.component)
      this.inputDOM = () => this.componentDOM().children[0].children[0].children[0]
    })

    it("triggers handleSubmit and clears input when button is clicked", function() {
      //debugger;
      //let inputDOM = TestUtils.findRenderedComponentWithType(this.componentDOM(), SearchGithub)
      //let buttonDOM = TestUtils.findRenderedComponentWithType(this.componentDOM(), "button")

      //expect(inputDOM).toBeDefined
      //expect(buttonDOM).toBeDefined

      expect(TestUtils.isElementOfType(this.inputDOM(), "input")).toBeTrue
    })
  })
})
