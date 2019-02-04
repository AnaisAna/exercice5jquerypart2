$('#lastName, #firstName').focus(function(){
$(this).css('border','1px solid green');
});
$('#lastName, #firstName').focusout(function(){
$(this).css('border','1px solid red');
});
