var React = require('react');

var Feed = React.createClass({
  render: function() {
    return(
      <div className="container">
        <h1>{'FEEEEeeeEEEED'}</h1>
        <button>{'Check-In'}</button>
        <button>{'Check-Out'}</button>
        <TransactionList/>
      </div>
    )
  }
});

var TransactionList = React.createClass({
  render: function() {
    return (
      <div className="transaction-list">
        <h2>{'transaction-list'}</h2>
        <Transaction/>
      </div>  
    )
  }
});

var Transaction = React.createClass({
  render: function() {
    return(
      <div className="transaction-row">
        <h3>{'transaction-row'}</h3>
        <em>{'Time/Date | Transaction Type | Author | Project# | Description'}</em>
      </div>
    )
  }
});

module.exports = Feed;
