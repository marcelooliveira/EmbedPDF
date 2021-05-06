var express = require('express');
const fs = require('fs');
var router = express.Router();

router.all('/:id', function(req, res, next) {
  let rawdata = fs.readFileSync('data/data.json');
  let papers = JSON.parse(rawdata);
  let paper = papers.filter(p => p.id == parseInt(req.params.id))[0];

  let authenticated = false;
  let user = {};

  if (req.body.firstName) {
    user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      jobTitle: req.body.jobTitle,
      email: req.body.email,
    };
    authenticated = true;
  }

  res.render('in-line', { 
    title: paper.title, 
    paper: paper,
    user: user,
    authenticated: authenticated,
    permissions: {
      showDownloadPDF: false,
      showPrintPDF: false,
      showFullScreen: false
    }
  });
});

module.exports = router;
