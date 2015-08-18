var React = require('react');

var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;

var NewPart = React.createClass({
  submitPart: function(e) {
    e.preventDefault();

    fetch('/new_part', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        partName: this.refs.partName.getDOMNode().value,
        partNumber: this.refs.partNumber.getDOMNode().value,
        hasSerialNumber: this.refs.hasSerialNumber.getDOMNode().value,
        serialNumber: this.refs.serialNumber.getDOMNode().value,
        quantity: this.refs.quantity.getDOMNode().value
      })
    })

    console.log("submitted part");
    Router.run(routes, '/');
  },

  render: function() {
    return(
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{'NewPart'}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.submitPart}>

              <div className="form-group">
                <label>{'Name'}</label>
                <input className="form-control" placeholder="Input Part Name" name="partName" ref="partName" />
              </div>

              <div className="form-group">
                <label>{'Part Number'}</label>
                <input className="form-control" placeholder="Input Part Number" name="partNumber" ref="partNumber"/>
              </div>

              <div className="checkbox">
               <label>
                 <input type="checkbox" name="hasSerialNumber" ref="hasSerialNumber" /> {'Has serial number'}
               </label>
              </div>

              <div className="form-group">
                <label>{'Serial Number'}</label>
                <input className="form-control" placeholder="Input Serial Number" name="serialNumber" ref="serialNumber" />
              </div>

              <div className="form-group">
                <label>{'Quantity'}</label>
                <input type="number" className="form-control" placeholder={1} name="quantity" ref="quantity"/>
              </div>

              <button type="submit" className="btn btn-success">Add Part</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = NewPart;
