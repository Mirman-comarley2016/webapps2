var xJSON = {
  "X-1": "Broke Mach 1",
  "X-3": "Butt ugly",
  "X-15": "Reached Hypersonic level",
  "X-29": "Forward-Swept-Wing test",
  "X-31": "Tested ESTOL",
  "X-37": "Reusable",
  "X-45": "Unmanned aircraft"
}

// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
var e = document.getElementById('planes-list'); //This line is unfinished! Use a method to capture our <ul> element.

for(var i=0; i<xPlanes.length; i++) {
  var xPlane = xPlanes[i];
  e.innerHTML += "<li>" + xPlane + "</li>"; //What does "i" refer to?
  //e.innerHTML +=
  // Do some things to add <li> elements to our empty list.
}
