var React = require('react');
var Note = require('./Note')
var NewPart = require('./NewPart')

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
            <h1>{'this is a test'}</h1>
            <br/>
            <Note key={"thisKey"} name={"Notes"}/>
            <NewPart emailAddress={"Enter your email here"}/>
          </body>
        </html>
      </div>
    )
  }
})

module.exports = App;
