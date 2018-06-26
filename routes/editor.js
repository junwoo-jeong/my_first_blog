var express = require('express');
var router = express.Router();
var dbCRUDapi = require('./model/dbCRUDapi.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('editor');
});

router.post('/', function(req, res, next){
    var paramsArr = new Array();
    paramsArr[0] = req.body.title;
    paramsArr[1] = req.body.content;
    paramsArr[2] = req.body.category;
    dbCRUDapi.insertContents(paramsArr, function (err, result, fields) {
      if (err) {
        //err handler
      }else{
        res.redirect('/contents');
      }
    });

});



module.exports = router;
