var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ekspor-impor', { title: 'Economic Trends | Indonesia Export/Import Visualization' });
});

module.exports = router;
