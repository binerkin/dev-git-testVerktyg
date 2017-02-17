/**
 * Created by johan on 2017-02-16.
 */
var sql = require('./mysqlModels/mysqlModels');

module.exports = {

    /*Function for setting up routes*/
    setup: function(main){

        main.get('/test', function(req,res){
            res.send('test');
        });

        main.get('/sqltest/', function(req, res){
            sql.get(res);
        });
    }
}