var React = require('react');

var NewPart = React.createClass({
  render: function() {
    return(
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{'Add a new part'}</h3>
          </div>
          <div className="panel-body">
            <form method="post" action="/new_part">

              <div className="form-group">
                <label>{'Name'}</label>
                <input className="form-control" placeholder="Input Part Name" name="partName"/>
              </div>

              <div className="form-group">
                <label>{'Part Number'}</label>
                <input className="form-control" placeholder="Input Part Number" name="partNumber"/>
              </div>

              <div className="checkbox">
               <label>
                 <input type="checkbox" name="hasSerialNumber"/> {'Has serial number'}
               </label>
              </div>

              <div className="form-group">
                <label>{'Serial Number'}</label>
                <input className="form-control" placeholder="Input Serial Number" name="serialNumber"/>
              </div>

              <div className="form-group">
                <label>{'Quantity'}</label>
                <input type="number" className="form-control" placeholder={1} name="quantity"/>
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
