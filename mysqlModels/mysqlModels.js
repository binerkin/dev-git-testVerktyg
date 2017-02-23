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



    /*function for calling join with id for welcome site*/
    this.getTestWelcome2 = function(id, res){

        connection.acquire(function(err, con){
            con.query('SELECT t.*, u.uFirstname FROM trivia as t INNER JOIN userAccount as u ON t.userId=u.userId WHERE t.triviaId = ?', id,  function(err,result){
                con.release;
                res.send(result);
            });
        });
    };



    /*function for getting test (add id)*/
    this.getTest = function (res) {

        connection.acquire(function(err, con){
            con.query('SELECT * FROM question WHERE triviaId = 1', function(err, result){
                con.release;
                res.send(result);
            });
        });

    }


}

module.exports = new mysqlModels();