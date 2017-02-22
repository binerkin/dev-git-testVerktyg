/**
 * Created by johan on 2017-02-22.
 */
$('document').ready(function(){

    $.getJSON('http://127.0.0.1:8000/welcome', welcome);

    function welcome(data){
        console.log('test');
        var result='';

        $.each(data, function(key, item){
            result+='Du har fått ett prov från: ';
            result+=item.firstname;
            result+=', Prov: ';
            result+=item.name;
            result+=', Antal frågor: ';
            result+= item.questionCount;
            result+=', Tid: ';
            result+= item.triviaTime;
            result+=', min.'
        });

        $('#container').html(result);

    }
});