var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var React = require('react');
var Note = require('./Note')
var NewPart = require('./NewPart')
var Navigation = require('./Navigation')

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
        <header>
          <ul>
            <li><Link to="app">Home</Link></li>
            <li><Link to="newPart">New Part</Link></li>
          </ul>
          {'Logged in as Greg'}
        </header>
      
        <RouteHandler/>
      </div>
    )
  }
});

var routes = (
  <Route name="app" path='/' handler={App}>
    <Route name="newPart" handler={NewPart}/>
    <DefaultRoute handler={Navigation}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});

module.exports = App;
