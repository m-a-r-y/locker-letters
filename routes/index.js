var express = require('express');
var Mailgun = require('mailgun-js');
var router = express.Router();

var api_key = 'key-5fb6c139d9f06bffde33425f20ad98f7';
var domain = 'sandbox0975063c170c400ea508a04bfcd3d141.mailgun.org';
var from_who = 'anon@email.com';



router.post('/sendMail', function(req, res){

    var mailgun = new Mailgun({apiKey: 'key-5fb6c139d9f06bffde33425f20ad98f7', domain: 'https://sandbox0975063c170c400ea508a04bfcd3d141.mailgun.org'});

    var data = {
        //Specify email data
        from: "anon@email.com",
        //The email to contact
        to: req.body.theirEmail,
        //Subject and text data
        subject: 'Hello from ANON',
        html: req.body.messages
    }
    console.log(mailgun.messages());
    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            res.render('error', { error : err});
            console.log("got an error: ", err);
        }
        //Else we can greet and leave
        else {
            //Here "submitted.jade" is the view file for this landing page
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            res.redirect('/');
            console.log(body);
        }
    });

    console.log(req.body.theirEmail);
    console.log(req.body.messages);
});
/* GET home page. */
router.get('/', function(req, res) {
    var fs = require('fs');
    var files = fs.readdirSync('./public/images/');
    console.log(files);
  res.render('index', { catFiles: files });
});


module.exports = router;