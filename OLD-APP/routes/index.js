var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let rawdata = fs.readFileSync('data/data.json');
  let papers = JSON.parse(rawdata);

  res.render('index', { title: 'Embedding PDF', papers: papers });
});

module.exports = router;
