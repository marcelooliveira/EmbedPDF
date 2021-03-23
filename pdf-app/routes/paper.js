var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET paper page. */
router.get('/:id', function(req, res, next) {
  let rawdata = fs.readFileSync('data/data.json');
  let papers = JSON.parse(rawdata);
  let paper = papers.filter(p => p.id == parseInt(req.params.id))[0];

  res.render('paper', { title: paper.title, paper: paper });
});

module.exports = router;
