/**
 * Created by johan on 2017-02-23.
 */
$('document').ready(function(){

    $('#container').on('click','a#startTest',function() {
        console.log('startTest');
        $.getJSON('http://127.0.0.1:8000/welcome', test);

        function test(data){
            var testForm = $("<form></form>").text($value.val());
            testForm.html('<input></input>');
            $('#container').html(testForm);
        }
    });
});