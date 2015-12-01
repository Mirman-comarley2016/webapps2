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

function(snapshot)  {
  var data = spanshot.val();
  for(var c in data) {
    var comment = data[c];
    var newLI = $(document.createElement("li"));
    newli.append(data.name);
    $("#comments").append(newLi)
  }
}
