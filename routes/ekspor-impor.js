var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ekspor-impor', { title: 'Trading Sector Visualization | Indonesia Export/Import' });
});

module.exports = router;
