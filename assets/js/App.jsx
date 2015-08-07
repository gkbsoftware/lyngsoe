var React = require('react');

require('../css/style.css');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Note = require('./Note')
var Inventory = require('./Inventory')
var NewPart = require('./NewPart')
var Navigation = require('./Navigation')
var Feed = require('./Feed')
var NewTransaction = require('./NewTransaction')

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
    <Route name="navigation" handler={Navigation}/>

    <Route name="inventory" handler={Inventory}/>
      <Route name="newPart" handler={NewPart}/>

    <Route name="newTransaction" handler={NewTransaction}/>
    <DefaultRoute handler={Feed}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});

module.exports = App;
