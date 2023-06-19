var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('about', { title: 'About', message: 'this about section is long', message2: 'and comprehensive', para1: 'uagefauggfuia   ', para2: 'yagfgueihfgyeuai hfgeaui efugau'});
 });

 module.exports = router;
