var express = require('express');
const fs = require('fs');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let rawdata = fs.readFileSync('data/data.json');
  let papers = JSON.parse(rawdata);
  res.send(papers);
});

module.exports = router;
