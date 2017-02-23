/**
 * Created by Anton on 2017-02-23.
 */
$(document).ready(function(){
    $("#savequestion").click(function(){
        var question = $("#question").val();
        localStorage.setItem("question", question);
        var storedquestion = localStorage.getItem("question");
        console.log(storedquestion);
    });
    $("#createquiz").click(function(){
        var testquestion = localStorage.getItem("question");
        console.log(testquestion);
    });
});