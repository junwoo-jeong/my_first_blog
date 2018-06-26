var express = require('express');
var router = express.Router();
var dbCRUDapi = require('./model/dbCRUDapi.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    dbCRUDapi.getAllContents(function(err, result, field){
        if (err) {
            res.send("<h1>실패</h1>");
        }else {
            res.render("index", {result : result});
        }
    });
});

module.exports = router;
