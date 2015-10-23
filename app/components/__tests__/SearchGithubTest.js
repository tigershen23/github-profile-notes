var React = require('react');
var TestUtils = require("react/lib/ReactTestUtils")
var expect = require('expect');
var stubRouterContext = require("../../utils/stubRouterContext")

var SearchGithub = require('../SearchGithub');

describe("root", function() {
  var Subject = stubRouterContext(SearchGithub, {}, {})

  it("renders without problems", function() {
    var searchGithub = TestUtils.renderIntoDocument(<Subject />)
    expect(searchGithub).toExist()
  });
})
