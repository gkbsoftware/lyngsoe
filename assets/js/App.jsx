var React = require('react');
var Note = require('./Note')

var App = React.createClass({
  constructor(){
    super()
    this.state = {entries: []}
  }

  componentDidMount(){
    var _this = this
    fetch('/entries').then(function(d){return d.json()}).then(function (data) {
      _this.setState({entries: data.entries})
    })
  }
  render() {
    console.log(this.state.entries)
    return (
      <div>
        {this.state.entries.map(function(entry){return <Note key={entry.name} {...entry}/> })}
      </div>
    );
  }
});

module.exports = App;
