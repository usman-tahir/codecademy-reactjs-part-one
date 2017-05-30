
var React = require('React'),
    ReactDOM = require('react-dom'),
    AnteaterProfile = require('./AnteaterProfile'),
    App = document.getElementById('app');

var MainPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Welcome to Anteater Towne!</h1>
        <AnteaterProfile/>
        <footer>
          To view more anteater profiles just like `this` one, sign up for an account!
        </footer>
      </div>
    );
  }
});

ReactDOM.render(<MainPage/>, App);
