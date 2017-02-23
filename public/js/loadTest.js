/**
 * Created by johan on 2017-02-23.
 */
$('document').ready(function(){

    $('#container').on('click','a#startTest',function() {
        console.log('startTest');
        $.getJSON('http://127.0.0.1:8000/welcome', test);

    });

    function test(data){
        console.log('json');
        var testForm = $("<form></form>");
        testForm.append('<p>hej</p><input type="text">');
        $('#container').html(testForm);
    }

});