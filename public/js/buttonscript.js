/**
 * Created by Matilda on 2017-02-23.
 */



/**
$(document).ready(function(){

    $("#severalanswer").on('click', function(e){
       e.preventDefault();
       $("#test").hide();
    });

});
**/
/*
function a() {
    document.write("<form id='form1' name='form1'action=''>");
    document.write(" <td><input name='name' type='text' id='name'/></td>");
    document.write("<td><input name='address' type='text' id='address'/></td>");

    document.write("");

}
*/

var formItem = $("<input type ='text' placeholder='Annat svar'><input type='checkbox' name='correctanswer' class='correctanswer' value='correct'> Rätt svar</input>");

$('document').ready(function(){
   $('#addForm').on('click',function(e){
       console.log('test');
       e.preventDefault();
       $('#formToBe').append(formItem);

   });
});




