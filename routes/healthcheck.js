var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('i am here');
});

module.exports = router;
