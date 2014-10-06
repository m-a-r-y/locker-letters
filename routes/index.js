var express = require('express');
var router = express.Router();
var m = require('mailgun');



router.post('/sendMail', function(req, res){
    var mg = new m.Mailgun('key-5fb6c139d9f06bffde33425f20ad98f7');

    mg.sendText("anon@anon.com", req.body.theirEmail, "Message from ANON", req.body.messages);
    console.log(req.body.theirEmail);
    console.log(req.body.messages);
    res.redirect('/');


});
/* GET home page. */
router.get('/', function(req, res) {
    var fs = require('fs');
    var files = fs.readdirSync('./public/images/');
    console.log(files);
  res.render('index', { catFiles: files });
});


module.exports = router;