var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var React = require('react');
var Note = require('./Note')
var NewPart = require('./NewPart')
var Navigation = require('./Navigation')
var Feed = require('./Feed')

var App = React.createClass({
  componentDidMount: function(){
    var _this = this
    fetch('/entries').then(function(d){return d.json()}).then(function (data) {
      _this.setState({entries: data.entries})
    })
  },

  getInitialState: function() {
    return (
      {entries: []}
    )
  },

  render: function(){
    return(
      <div>
        <Navigation/>
      
        <RouteHandler/>
      </div>
    )
  }
});

var routes = (
  <Route name="app" path='/' handler={App}>
    <Route name="newPart" handler={NewPart}/>
    <Route name="navigation" handler={Navigation}/>
    <DefaultRoute handler={Feed}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});

module.exports = App;
