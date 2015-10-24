var TestUtils = require('react-addons-test-utils');

function  shallowRender(element, context={}) {
  var shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(element, context);
  return shallowRenderer.getRenderOutput();
}

module.exports = shallowRender;
