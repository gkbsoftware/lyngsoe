var React = require('react');

var Note = React.createClass({
  sayHi: function(){
    console.log('hi')
    var data = {
      name: this.props.name
    }

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
