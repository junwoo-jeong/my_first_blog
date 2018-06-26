var mysql = require('mysql');
var dbconfig = require('../../config/dbconfig');

var exports = module.exports = {};

/* 모든 컨텐츠 조회 */
exports.getAllContents = function(returnResult) {
    var conn = mysql.createConnection(dbconfig);
    var sql = 'select * from tb_bbs';
    conn.connect();
    conn.query(sql, function(err, rows, fields){
        var resultString = JSON.stringify(rows);
        var result = JSON.parse(resultString);
        //callback func
        returnResult(err, result, fields);
    });
    conn.end();
};

 /* 아이디로 조회 */
exports.getContents = function(bbsno, returnResult) {
    var conn = mysql.createConnection(dbconfig);
    var sql = 'SELECT * FROM tb_bbs WHERE bbsno = ?';
    conn.connect();

    conn.query(sql, [bbsno], function(err, rows, fields){
        var resultString = JSON.stringify(rows);
        var result = JSON.parse(resultString);
        //callback func
        console.log(result);
        returnResult(err, result, fields);
    });
    conn.end();
};

/* 글 작성 */
exports.insertContents = function(paramsArr, returnResult) {
  var conn = mysql.createConnection(dbconfig);
  var sql = 'INSERT INTO tb_bbs(auther, title, content, wdate, hit, category_id) VALUES("jeong", ?, ?, NOW(), 1, ?)';
  conn.connect();
  //post는 배열로 작성 0번index부터 차래대로 ?에 삽입됨
  conn.query(sql, paramsArr, function (err, rows, fields) {
    returnResult(err, rows, fields);
  });
  conn.end();
};
