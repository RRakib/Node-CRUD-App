exports.landing = function(req, res, next) {
    res.render('landing', { title: 'EXPRESS' });
  };

exports.submit_lead = (req, res , next) => {
    console.log(req.body.email_lead);
      res.redirect("/")
}