
var React = require('react'),
    ReactDOM = require('react-dom'),
    app = document.getElementById('app');

function makeDoggy(e) {
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'dog');
}

var kitty = (
  <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" alt="kitten" onClick={makeDoggy}/>
);

ReactDOM.render(kitty, app);
