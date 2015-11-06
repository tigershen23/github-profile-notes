import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import shallowRender from "../../utils/test/shallowRender"
import ShallowTestUtils from "react-shallow-testutils"

let { Simulate, renderIntoDocument } = TestUtils
let { findWithType } = ShallowTestUtils
let SearchGithub = require('../SearchGithub');

describe("SearchGithub", function() {
  let history = {
    pushState: function() {}
  }

  describe("structure", function() {
    beforeEach(function() {
      this.result = shallowRender(<SearchGithub />, { history } )
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
      SearchGithub = stubContext(SearchGithub, { history })
      this.component = renderIntoDocument(<SearchGithub />)
      this.componentDOM = () => ReactDOM.findDOMNode(this.component)
    })

    it("triggers handleSubmit and clears input when button is clicked", function() {
      let inputDOM = TestUtils.findRenderedDOMComponentWithTag(this.component, "input")
      let formDOM = TestUtils.findRenderedDOMComponentWithTag(this.component, "form")

      inputDOM.value = "tigershen23"
      Simulate.change(inputDOM)
      Simulate.submit(formDOM)

      expect(inputDOM.value).toEqual("")
    })
  })
})
