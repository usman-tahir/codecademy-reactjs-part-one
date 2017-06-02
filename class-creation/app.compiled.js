'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    App = document.getElementById('app');

var owl = {
  title: "Excellent Owl",
  src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg"
};

// Component class starts here
var Owl = React.createClass({
  displayName: 'Owl',

  render: function render() {
    return React.createElement('div', null, React.createElement('h1', null, owl.title),
      React.createElement('img', { src: owl.src, alt: owl.title }));
  }
});

ReactDOM.render(React.createElement(Owl, null), App);
