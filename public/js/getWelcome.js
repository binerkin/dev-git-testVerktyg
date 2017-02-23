/**
 * Created by johan on 2017-02-22.
 */
$('document').ready(function(){
    var id =1;
    $.getJSON('http://127.0.0.1:8000/welcome/'+id, welcome);

    function welcome(data){
        console.log('test');
        var result='';

        $.each(data, function(key, item){
            result+='<p>Provutställare: ';
            result+=item.firstname;
            result+='</p> <p>Prov: ';
            result+=item.name;
            result+='</p><p>Antal frågor: ';
            result+= item.questionCount;
            result+='</p><p>Tid: ';
            result+= item.triviaTime;
            result+=' min</p>';
            result+='<nav class="navbutton"><a id="startTest">Starta provet!</a></nav>';

        });

        $('#container').html(result);

    }
});