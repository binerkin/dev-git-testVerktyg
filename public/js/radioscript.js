/**
 * Created by Matilda on 2017-02-22.
 */

console.log("Hej");

/**
var radioButton = document.getElementById("#yesno");
var getBody = document.getElementById("#choiceresult");

$(document).ready(function(){
    $("yesno").click(function(){
        $("choiceresult").hide(1000);
    });
});
**/

$(document).ready(function() {
    // show the table as soon as the DOM is ready
    $("#choice1").show();
    $("#choice2").hide();
    $("#choice3").hide();

    // hides the table on clicking the noted link
    $("#radio1").click(function() {
        $("#choice1").show();
        $("#choice2").hide();
        $("#choice3").hide();
    });

    // show the table on clicking the noted link
    $("#radio2").click(function() {
        $("#choice1").hide();
        $("#choice2").show();
        $("#choice3").hide();
    });
});


/*
$(function(){
    console.log('test');
    // cache these!
    var radioButton = document.getElementById("#yesno"); // get the radio button
    var setBody = document.getElementById("#choiceresult"); //get the body

    radioButton.create(function() {
        if( $(this).val() === "#yesno" ) { // check the value
            var x = document.createElement("INPUT");
            x.setAttribute("type", "radio");
            document.body.appendChild(setBody(x));
            //setBody(x);
            //document.body.appendChild(x);
        } else {
            radioButton.hide();
        }
    });
});

*/

