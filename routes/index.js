var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var fs = require('fs');
    var files = fs.readdirSync('./public/images/');
    console.log(files);
  res.render('index', { catFiles: files });
});

module.exports = router;
