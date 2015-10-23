var React = require('react');
var TestUtils = require("react/lib/ReactTestUtils")
var expect = require('expect');
var SearchGithub = require('../SearchGithub');

describe("root", function() {
  it("renders without problems", function() {
    var searchGithub = TestUtils.renderIntoDocument(<SearchGithub />)
    expect(searchGithub).toExist()
  });
})
