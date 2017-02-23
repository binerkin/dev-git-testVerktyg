/**
 * Created by Matilda on 2017-02-23.
 *
 * Skapar flera formulärer
 */



var formItem = $("<input type ='text' placeholder='Annat svar'><input type='checkbox' name='correctanswer' class='correctanswer' value='correct'> Rätt svar</input>");

$('document').ready(function(){
   $('#addForm').on('click',function(e){
       console.log('test');
       e.preventDefault();
       $('.formToBe').append(formItem);

   });
});




