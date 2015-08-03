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
        <html lang="en">
          <body>
            <Navigation />
            <NewPart />
          </body>
        </html>
      </div>
    )
  }
})

module.exports = App;
