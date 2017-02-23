/**
 * Created by johan on 2017-02-23.
 */
$('document').ready(function(){

    $('#container').on('click','a#startTest',function() {
        console.log('startTest');
        $.getJSON('http://127.0.0.1:8000/testget', test);

    });

    function test(data){
        console.log('json');
        var testForm = $("<form></form>");
        $.each(data, function(key,value){

        });
        testForm.append('<p>hej</p><input type="text">');
        $('#container').html(testForm);
    }

});