const handlePaperRequest = require('./handlePaperRequest');

var express = require('express');
var router = express.Router();

router.all('/:id', function(req, res, next) {
  handlePaperRequest(req, res, 'sized-container');
});

module.exports = router;
