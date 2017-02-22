/**
 * Created by johan on 2017-02-22.
 */
$('document').ready(function(){

    $.getJSON('http://127.0.0.1:8000/welcome', welcome);

    function welcome(data){
        console.log('test');
        var result='';

        $.each(data, function(key, item){
            result+='Prov: ';
            result+=item.name;
            result+=' Tid: ';
            result+= item.triviaTime;
        });

        $('#container').html(result);

    }
});