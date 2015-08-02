require('dotenv').load();

var express = require('express');
var router = express.Router();
var pg = require('pg')

var inventory = require('../services/inventory');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Lyngsoe Inventory Manager' });
});

router.get('/entries', function(req, res, next) {
  res.json({entries: [{name: 'jason'}]});
});

router.post('/entries', function(req, res, next) {
  console.log('req.body.name= ' + req.body.name);
  res.json({testData: ['johnny', 'mike', 'alan']})
});

router.get('/db-connect', function(req, res) {
  var pg = require('pg');
  var conString = process.env.DB_INFO;

  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT $1::int AS number', ['1'], function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0].number);
      //output: 1
    });
  });
  res.send('hi')
});

module.exports = router;
