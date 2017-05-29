var React = require('react'),
    ReactDOM = require('react-dom'),
    App = document.getElementById('app');


var owl = {
  title: "Excellent Owl",
  src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg"
};

// Component class starts here
var Owl = React.createClass({
  render: function () {
    return (
      <div>
    		<h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title}/>
      </div>
    );
  }
});

ReactDOM.render(<Owl/>, App);
