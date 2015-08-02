var React = require('react');
var Note = require('./Note')

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
        {this.state.entries}
        <br/>
        <Note key={"thisKey"} name={"Notes"}/>
      </div>
    )
  }
})

module.exports = App;
