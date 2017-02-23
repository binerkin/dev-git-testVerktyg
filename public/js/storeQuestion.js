/**
 * Created by Anton on 2017-02-23.
 */
$(document).ready(function(){
    $("#savequestion").click(function(){
        var question = $("#question").val();
        localStorage.setItem("question", question);

        var questiontype = $('input[name=questiontype]:checked').val();
        localStorage.setItem("questiontype", questiontype);
        var testquestiontype = localStorage.getItem(questiontype);
        console.log(testquestiontype);
    });

});