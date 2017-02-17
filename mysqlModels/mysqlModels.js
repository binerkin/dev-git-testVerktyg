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


}

module.exports = new mysqlModels();