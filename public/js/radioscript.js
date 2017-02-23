/**
 * Created by Matilda on 2017-02-22.
 *
 * Funktion till frågalternativ (radiobuttons).
 */

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
