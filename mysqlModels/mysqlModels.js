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

    /*function for calling stored procedure for welcome site*/
    this.getTestWelcome = function(res){

        connection.acquire(function(err, con){
            con.query('call get_trivia(1)', function(err,result){
                con.release;
                res.send(result);
            });
        });
    };

    this.getTestWelcome2 = function(id, res){

        connection.acquire(function(err, con){
            con.query('call get_trivia( ? )', id,  function(err,result){
                con.release;
                res.send(result);
            });
        });
    };


}

module.exports = new mysqlModels();