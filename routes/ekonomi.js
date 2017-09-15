var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ekonomi', { title: 'Economic Trends | Economic Indicator Visualization' });
});

module.exports = router;