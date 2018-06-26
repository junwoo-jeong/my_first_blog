var express = require('express');
var router = express.Router();
var dbCRUDapi = require('./model/dbCRUDapi.js');

/* GET home page. */
router.get('/:bbsno', function(req, res, next) {
    console.log("hello");
    dbCRUDapi.getContents(req.params.bbsno, function(err, result, field){
        if(err){
            res.send("<h1>실패</h1>");
        }else{
            res.render("post", {result : result});
        }
    });
});

module.exports = router;
