const fs = require('fs');

function handlePaperRequest(req, res, view) {
  let rawdata = fs.readFileSync('data/data.json');
  let papers = JSON.parse(rawdata);

  console.log('req.body:' + JSON.stringify(req.body));

  let paper = papers.filter(p => p.id == parseInt(req.params.id))[0];
  let user = {};
  let authenticated = false;

  if (req.body.firstName) {
    user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      jobTitle: req.body.jobTitle,
      email: req.body.email,
    };
    authenticated = true;
  }

  res.render(view,
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

module.exports = handlePaperRequest;