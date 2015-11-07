import React from "react"
import ReactDOM from "react-dom"
import { Simulate, renderIntoDocument } from "react-addons-test-utils"
import { findWithType } from "react-shallow-testutils"
import shallowRender from "../../utils/test/shallowRender"

import UserProfile from "../Github/UserProfile"
import Repos from "../Github/Repos"
import Notes from "../Notes/Notes"

let Profile = require('../Profile')

describe("Profile", function() {
  let history = {
    pushState: function() {}
  }
  let profileParams = {
    username: 'tigershen23'
  }
  let profileState = {
    notes: ['asdf']
  }

  describe("structure", function() {
    beforeEach(function() {
      this.result = shallowRender(<Profile params={profileParams} />, { history } )
    })

    it("renders a UserProfile component", function() {
      let userProfile = findWithType(this.result, UserProfile)

      expect(userProfile).toBeDefined()
      expect(userProfile.props.username).toEqual(profileParams.username)
      expect(userProfile.props.bio).toEqual(jasmine.any(Object))
    })

    it("renders a Repos component", function() {
      let repos = findWithType(this.result, Repos)

      expect(repos).toBeDefined()
      expect(repos.props.username).toEqual(profileParams.username)
    })

    it("renders a Notes component with correct props", function() {
      let notes = findWithType(this.result, Notes)

      expect(notes).toBeDefined()
      expect(notes.props.username).toEqual(profileParams.username)
      expect(notes.props.notes).toEqual([])
      expect(notes.props.addNote).toEqual(jasmine.any(Function))
    })
  })

  describe("behavior", function() {
    beforeEach(function() {
      let stubContext = require("react-stub-context")
      Profile = stubContext(Profile, { history })
      this.component = renderIntoDocument(<Profile params={profileParams} />)
      this.componentDOM = () => ReactDOM.findDOMNode(this.component)
    })

    it("renders without error", function() {
      expect(this.componentDOM()).toBeDefined()
    })
  })
})
