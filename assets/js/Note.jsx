var React = require('react');

var Note = React.createClass({
  sayHi: function(){
    console.log('hi')
    var data = {
      name: this.props.name
    }

    var _this = this;

    fetch('/entries', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
      })
    }).then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
    })
  },

  render: function(){
    return (
      <div onClick={this.sayHi.bind(this)}>
        {this.props.name}
      </div>
    );
  }
})

module.exports = Note;
