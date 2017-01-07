var express = require('express');
var emailSvc = require('../services/email.svc');

var router = express.Router();

router.post('/', function(req, res) {
    var mainEmail = 'linnterweb@gmail.com';
    emailSvc.sendEmail(mainEmail, req.body.fromAddress, req.body.subject, req.body.content)
    .then(function(success) {
        console.log(success);
        res.send('Email sent!');
    }, function(err) {
        console.log(err);
        res.sendStatus(500);
    });
})

module.exports = router;