/**
 * Created by johan on 2017-02-16.
 */

/*Import necessary modules*/
var express = require('express');
var routes = require('./routes');
var connection = require('./connection');

/*Create express object*/
var main = express();

/*Configurate routes*/
routes.setup(main);

/*Setup connection pool*/
connection.setupConnection();


/*Provide static files from public directory*/
main.use(express.static(__dirname + '/public'));

/*Start listening at port 8000*/
var server = main.listen(8000, function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log("Listening @ http://%s:%s", host, port);

});