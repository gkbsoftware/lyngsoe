var React = require('react');
var Note = require('./Note');
var App = require('./App');
require('../css/style.css');

window.onload = function() {
  React.render(<App />, document.getElementById('container'))
}
