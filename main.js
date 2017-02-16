/**
 * Created by johan on 2017-02-16.
 */

/*importera nödvändiga moduler*/
var express = require('express');
var routes = require('./routes');

/*skapa express objekt*/
var main = express();

/*konfigurera routes*/
routes.setup(main);


/*Dela statiska filer från public*/
main.use(express.static(__dirname + '/public'));

/*Starta server*/
var server = main.listen(8000, function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log("Listening @ http://%s:%s", host, port);

});