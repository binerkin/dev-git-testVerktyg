/**
 * Created by johan on 2017-02-17.
 */
var mysql = require('mysql');


/*Constructor for creating connection object*/
function Connection(){
    this.pool = null;

    /*Function for setting up a connection pool*/
    this.setupConnection = function(){
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'root',
            password: 'hej123',
            port: 3306,
            database: 'studentTrivia'
        });
        console.log('mysql connection setup')
    };

    /*Function for acquiring a connection from the connection  pool*/
    this.acquire = function(callback){
        this.pool.getConnection(function(err, connection){
            callback(err, connection);
        });
    };
}

/*Export connection as new object*/
module.exports = new Connection();