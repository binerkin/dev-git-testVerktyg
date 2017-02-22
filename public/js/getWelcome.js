/**
 * Created by johan on 2017-02-22.
 */
$('document').ready(function(){
    $.getJSON('http://127.0.0.1:8000/welcome', welcome);

    function welcome(data){
        var result='';
        $.each(result, function(key, item){
            result+='Prov: ';
            result+=data.name;
            result+='Tid: ';
            result+= data.triviaTime;
        });
        $('#container').html(result);

    }
});