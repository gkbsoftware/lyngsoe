var React = require('react');

var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;

var Inventory = React.createClass({
  render: function() {

    return(
      <div className="container">

        <div className="panel panel-default">
          <div className="panel-heading">
            <strong className="panel-title">{'Inventory'}</strong>
          </div>
          <div className="panel-body">
            <ul>
              <ui><Link to="newPart">Add New Part</Link></ui>
            </ul>

            <div className="row">
              <div className="centerMe col-md-2"><strong>{'Date'}</strong></div>
              <div className="centerMe col-md-2"><strong>{'Type'}</strong></div>
              <div className="centerMe col-md-1"><strong>{'Author'}</strong></div>
              <div className="centerMe col-md-2"><strong>{'Project #'}</strong></div>
              <div className="centerMe col-md-2"><strong>{'Customer'}</strong></div>
              <div className="col-md-3"><strong>{'Description'}</strong></div>
            </div>

            <TransactionList />

          </div>
        </div>
      </div>
    )
  }
});

var TransactionList = React.createClass({
  render: function() {

    var myTransaction = {
      tranTimeStamp: '8/6/15',
      tranType: 'Check-Out',
      tranAuthor: 'KJB',
      tranProjectNumber: 'B25603-4-2',
      tranCustomer: 'Peninsula, Queens',
      tranDescription: '24/7 Touchscreen and Power Supply for installation'
    }

    return (
      <div className="transaction-list">
        <Transaction myTransaction={myTransaction}/>
      </div>
    )
  }
});

var Transaction = React.createClass({
  render: function() {
    return(
      <div className="transaction-row">
        <div className="row">
          <div className="centerMe col-md-2"><em>{this.props.myTransaction.tranTimeStamp}</em></div>
          <div className="centerMe col-md-2"><em>{this.props.myTransaction.tranType}</em></div>
          <div className="centerMe col-md-1"><em>{this.props.myTransaction.tranAuthor}</em></div>
          <div className="centerMe col-md-2"><em>{this.props.myTransaction.tranProjectNumber}</em></div>
          <div className="centerMe col-md-2"><em>{this.props.myTransaction.tranCustomer}</em></div>
          <div className="col-md-3"><em>{this.props.myTransaction.tranDescription}</em></div>
        </div>

      </div>
    )
  }
});

module.exports = Inventory;
