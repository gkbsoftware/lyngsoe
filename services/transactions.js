var pg = require('pg');
var jsSHA = require("jssha");

// require('dotenv').load();

var conString = "postgres://hygyymdniqifsq:FmeeIBT5p20Ut1mJkF4yGh_uA8@ec2-54-204-3-200.compute-1.amazonaws.com:5432/deoj21i992eupe?ssl=true";

module.exports = {
  createCheckin: function(newTran) {
    // console.log(newPart.partName)

    console.log("tranType= " + newTran.tranType)

    // if(newTran.tranType = ) {
    //   newPart.quantity = 1;
    // }

    // pg.connect(conString, function(err, client, done) {
    //   if(err) {
    //     return console.error('error fetching client from pool', err);
    //   }
    //   client.query('INSERT INTO part_type (name, part_number, has_serial_number, quantity) VALUES ($1, $2, $3, $4) RETURNING id',
    //   [newPart.partName, newPart.partNumber, newPart.hasSerialNumber, newPart.quantity], function(err, result) {
    //     //call `done()` to release the client back to the pool
    //     done();

    //     if(err) {
    //       return console.error('error running query', err);
    //     }

    //     cb(result.rows[0].id)
    //   });
    // });
  }
}