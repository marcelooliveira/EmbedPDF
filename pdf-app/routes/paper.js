var express = require('express');
const fs = require('fs');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  handlePaperRequest(req, res);
});

router.post('/:id', function(req, res, next) {
  handlePaperRequest(req, res);
});

module.exports = router;

function handlePaperRequest(req, res) {
  let rawdata = fs.readFileSync('data/data.json');
  let papers = JSON.parse(rawdata);

  console.log('req.body:' + JSON.stringify(req.body));

  let paper = papers.filter(p => p.id == parseInt(req.params.id))[0];
  let user = { };
  let authenticated = false;

  if (req.body.firstName) {
    user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      jobTitle: req.body.jobTitle,
      email: req.body.email,
    }
    authenticated = true;
  }

  res.render('paper',
    {
      title: paper.title,
      paper: paper,
      user: user,
      authenticated: authenticated,
      permissions: {
        canViewPDF: true,
        showDownloadPDF: true,
        showPrintPDF: true,
        showFullScreen: true
      }
    });
}

