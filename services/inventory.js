var pg = require('pg');
var jsSHA = require("jssha");

require('dotenv').load();

var conString = process.env.DB_INFO;

module.exports = {
  createPart: function() {
    cb(true);
  }

  // createUser: function(user, cb) {
  //   pg.connect(conString, function(err, client, done) {
  //     if (err) {
  //       console.log(err);
  //       throw(err);
  //     }
  //
  //     // var shaObj = new jsSHA("SHA-1", "TEXT");
  //     // shaObj.setHMACKey(process.env.SECRET_KEY, "TEXT");
  //     // shaObj.update(user.password);
  //     // user.password = shaObj.getHMAC("HEX");
  //
  //     client.query('INSERT INTO users (email_address, password, created_at, updated_at) VALUES ($1, $2, now(), now()) RETURNING id', [user.emailAddress, user.password], function(err, result) {
  //       done();
  //       if (err) {
  //         console.log(err);
  //         throw(err);
  //       }
  //
  //       user.id = result.rows[0].id;
  //       cb(user);
  //     });
  //   });
  // }
}
