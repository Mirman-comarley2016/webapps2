var ref = new Firebase("https://blazing-heat-1916.firebaseio.com/"); //Use your app's Firebase URL

// Add some event handlers for FB events
$(document).ready(function(){
  console.log("Document loaded");
  $("#contact-form").submit(function(event){
    event.preventDefault();
    console.log("SUBMIT");
    var x = $("#firstname").val();
    var y = $("#lastname").val();
    var z = $("#email").val();
    var a = $("#message").val();

    var results = {
      firstname: x,
      lastname: y,
      email: z,
      message: a
    }
    ref.push(results);
  });

});

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot)  {
  var data = snapshot.val();
  console.log(data);
  for(var c in data) {
    var comment = data[c];
    var newLi = $(document.createElement("li"));
    newLi.append(data.name);
    $("#contact-form").append(newLi)
    console.log(snapshot.val());
  }
}), function (errorObject) {
  console.log("The read failed: " + errorObject.code);
};

newLi.append(<li> "#firstname" </li> + <li> "#lastname" </li> + <li> "#email" </li> + <li> "message" </li>)
