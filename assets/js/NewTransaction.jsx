var React = require('react');

var NewTransaction = React.createClass({
  submitTransaction: function(e) {
    e.preventDefault();

    fetch('/new_transaction', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        partName: this.refs.tranAuthor.getDOMNode().value,
      })
    })

    location.href('/');
  },

  render: function() {
    return(
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{'New Transaction'}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.submitPart}>

              <div className="form-group">
                <label>{'Author Initials'}</label>
                <input className="form-control" placeholder="GKB" maxLength="3" name="tranAuthor" ref="tranAuthor" required />
              </div>

              <button type="submit" className="btn btn-success">Add Part</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = NewTransaction;
