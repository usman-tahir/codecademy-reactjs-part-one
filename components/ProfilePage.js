
var React = require('react'),
    ReactDOM = require('react-dom'),
    NavBar = require('./NavBar.js'),
    App = document.getElementById('app');

var ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar/>
        <h1>All About Me!</h1>
        <p>
          (All about me info here)
        </p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg"/>
      </div>
    );
  }
});

ReactDOM.render(<ProfilePage/>, App);
