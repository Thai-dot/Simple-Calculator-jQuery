 function insert(num) {
     if($('.display').val()=""){
        $('.display').val(0);
     }
     $('.display').val($('.display').val() + num)
 }

 function equal() {
    
     $('.display').val(eval($('.display').val()));

 }

 function c() {
     $(".display").val("")
 }

 function del() {
     let value = $(".display").val();
     $(".display").val(value.substring(0, value.length - 1));
 }

 $(".display").keypress(function(event){
     if(event.keyCode===13){
        event.preventDefault();
        document.getElementById("equal-button").click();
     }
 });

