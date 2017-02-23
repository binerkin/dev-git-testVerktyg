/**
 * Created by johan on 2017-02-23.
 */
$('document').ready(function(){

    /*Event delegation listens for click on start test button
    triggers ajax request*/
    $('#container').on('click','a#startTest',function() {
        console.log('startTest');
        $.getJSON('http://127.0.0.1:8000/testget', test);

    });

    /*call back function for ajax request*/
    function test(data){
        console.log('json');
        var result='';
        var inputType='';
        var testForm = $("<form></form>");

        $.each(data, function(key,item){
            inputType='';
            console.log('test');
            result+='<p>' + item.questionText + '</p>';

            /*Switch för frågetyp*/
            switch(item.questionType){
                case 1:
                    inputType+='<input type="radio" name="singleChoice" value="yes">';
                    inputType+='<input type="radio" name="singleChoice" value="no">';
                    break;
                case 2:
                    inputType+='<input type=">'



            }

            result+='<input type="text>';
        });

        testForm.append(result);
        $('#container').html(testForm);
    }

});