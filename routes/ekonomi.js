var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ekonomi', { title: 'Trading Sector Visualization | Economic Indicator' });
});

module.exports = router;