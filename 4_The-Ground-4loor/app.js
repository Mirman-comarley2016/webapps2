$(document).ready(function(){
  $("#contact-form").submit(function(event){
    event.preventDefault();

    var x = $("#firstname").val();
    var y = $("#lastname").val();
    var z = $("#email").val();
    var a = $("#message").val();

    var newObj = {
      firstname: x,
      lastname: y,
      email: z,
      message: a
    }
    $.post(newObj)
    console.log(newObj);
  })

});
//Use jQuery to collect the values from the fields and create a
//JSON object containing them. Then, log the result to the console

// Secondary Objective: Use the AJAX methods built into jQuery to send
// The form data to http://x.mirman.org:9999. Write a callback to handle
// the response.
