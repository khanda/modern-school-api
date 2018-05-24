var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/save', function(req, res, next) {
    res.send('Save user');
});
module.exports = router;
