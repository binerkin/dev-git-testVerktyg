/**
 * Created by johan on 2017-02-17.
 */
/*fetch connection object*/
var connection  = require('../connection');

/*constructor for model object used by routes module*/
function mysqlModels(){

    /*function for selecting all from users table*/
    this.get = function(res){

        connection.acquire(function(err, con){
            con.query('SELECT * FROM student', function(err,result){
                con.release;
                res.send(result);
            });
        });
    };

    /*function for inner join request on welcome site*/
    this.getTestWelcome = function(res){

        connection.acquire(function(err, con){
            //con.query('SELECT * FROM trivia', function(err,result){
            con.query('SELECT t.*, u.firstname FROM trivia as t INNER JOIN userAccount as u ON t.userId=u.userId', function(err,result){
                con.release;
                res.send(result);
            });
        });
    };

    /*function for calling stored procedure with id for welcome site*/
    this.getTestWelcome2 = function(id, res){

        connection.acquire(function(err, con){
            con.query('SELECT * FROM trivia WHERE triviaId = ?', id,  function(err,result){
                con.release;
                res.send(result);
            });
        });
    };



    /*function for getting test add id*/
    this.getTest = function (res) {

        connection.acquire(function(err, con){
            con.query('SELECT * FROM question', function(err, result){
                con.release;
                res.send(result);
            });
        });

    }


}

module.exports = new mysqlModels();