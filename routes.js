/**
 * Created by johan on 2017-02-16.
 */
var sql = require('./mysqlModels/mysqlModels');

module.exports = {

    /*Function for setting up routes*/
    setup: function(main){

        /*get test*/
        main.get('/test', function(req,res){
            res.send('test');
        });
        /*SQL test*/
        main.get('/sqltest/', function(req, res){
            sql.get(res);
        });

        /*Route for welcome screen details*/
        main.get('/welcome/', function(req, res){
            sql.getTestWelcome(res);
        });

        /*Route for welcome screen details with id*/
        main.get('/welcome2/:id/', function(req, res){
            sql.getTestWelcome2(req.params.id, res);
        });

        /*Rout for getting test (add id)*/
        main.get('/testget/', function(req, res){
           sql.getTest(res);
        });
    }
}