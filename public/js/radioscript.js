/**
 * Created by Matilda on 2017-02-22.
 */


$(function(){
    // cache these!
    var $radioButtons = $("yesno"); // get the radiobutton
    var $section = $("choiceresult"); //get the body

    $radioButtons.create(function () {
        if( $(this).val() === "yesno" ) { // check the value
            var x = document.createElement("INPUT");
            x.setAttribute("type", "radio");
            $section.appendChild(x);
            //document.body.appendChild(x); // .choiceresult
            //section(x);
        } else {
            yesno.hide();
        }
    });
});

