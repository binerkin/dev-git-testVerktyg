/**
 * Created by johan on 2017-02-16.
 */
module.exports = {

    /*Funktion som sätter upp routes*/

    setup: function(main){

        main.get('/test', function(req,res){
            res.send('test');
        });
    }
}