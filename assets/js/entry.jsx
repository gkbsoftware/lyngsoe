var React = require('react');
var Note = require('./Note');
var App = require('./App');
require('../css/style.css');

var renderApp = function(){
  React.render(<App />, document.getElementById("container"))
}

window.onload = function() {
  renderApp();
}
