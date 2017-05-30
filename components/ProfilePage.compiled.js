(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = function createExport(_ref) {
  var locals = _ref.locals;


  return function (ReactClass, componentId) {

    if (!locals[0].exports) {
      locals[0].exports = {};
    }

    if (!locals[0].exports.__ReactComponents) {
      locals[0].exports.__ReactComponents = [];
    }

    locals[0].exports.__ReactComponents.push(ReactClass);

    return ReactClass;
  };
};

},{}],2:[function(require,module,exports){
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');

var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
  filename: '/home/ccuser/workspace/learn-react-03-01-03d/NavBar.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
  };
}

var React = require('react');

var NavBar = _wrapComponent('_component')(React.createClass({
  displayName: 'NavBar',

  render: function render() {
    var pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    var navLinks = pages.map(function (page) {
      return React.createElement(
        'a',
        { href: '/' + page },
        page
      );
    });

    return React.createElement(
      'nav',
      null,
      navLinks
    );
  }
}));

module.exports = NavBar;

},{"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined}],3:[function(require,module,exports){
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');

var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
  filename: '/home/ccuser/workspace/learn-react-03-01-03d/ProfilePage.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
  };
}

var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.js');

var ProfilePage = _wrapComponent('_component')(React.createClass({
  displayName: 'ProfilePage',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(NavBar, null),
      React.createElement(
        'h1',
        null,
        'All About Me!'
      ),
      React.createElement(
        'p',
        null,
        '(All about me info here)'
      ),
      React.createElement('img', { src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg' })
    );
  }
}));

ReactDOM.render(React.createElement(ProfilePage, null), document.getElementById('app'));

},{"./NavBar.js":2,"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined,"react-dom":undefined}]},{},[3]);

