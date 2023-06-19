var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var name = req.query.name || 'Name';
    res.send('witaj ' + name + '!');
 });

 module.exports = router;
