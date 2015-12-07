var ref = new Firebase("https://blazing-heat-1916.firebaseio.com/"); //Use your app's Firebase URL

// Add some event handlers for FB events
$(document).ready(function(){
  console.log("Document loaded");
  $("#add-form").submit(function(event){
    event.preventDefault();
    console.log("Form submitted!");
    // Go grab your info and do something with it.
  });
});
var x = $("#firstname").val();
var y = $("#lastname").val();
var z = $("#email").val();
var a = $("#message").val();
// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot)  {
  var data = spanshot.val();
  for(var c in data) {
    var comment = data[c];
    var newLI = $(document.createElement("li"));
    newli.append(data.name);
    $("#comments").append(newLi)
    console.log(snapshot.val());
  }
}), function (errorObject) {
  console.log("The read failed: " + errorObject.code);
};
