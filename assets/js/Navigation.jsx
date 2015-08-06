var React = require('react');

var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;

var Navigation = React.createClass({
  render: function() {
    return(
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="">Home</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="newPart">New Part</Link></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Inventory <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to="newPart">Add New Part</Link></li>
                    <li><a href="#">Show Inventory</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
        
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Preferences action</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Logout link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
});

module.exports = Navigation;
