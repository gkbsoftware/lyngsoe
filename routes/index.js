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

router.post('/new_part', function(req, res) {
  var newPart = {
    partName: req.body.partName,
    partNumber: req.body.partNumber,
    hasSerialNumber: req.body.hasSerialNumber,
    serialNumber: req.body.serialNumber,
    quantity: req.body.quantity,
    partTypeId: 0
  }

  inventory.createPart(newPart, function(partTypeId) {
    newPart.partTypeId = partTypeId;
    inventory.createSerialNumber(newPart);
  });
});

module.exports = router;
