var xPlanes = {
  "X-1": "Broke Mach 1",
  "X-3": "Butt ugly",
  "X-15": "Reached Hypersonic level",
  "X-29": "Forward-Swept-Wing test",
  "X-31": "Tested ESTOL",
  "X-37": "Reusable",
  "X-45": "Unmanned aircraft"
}


var e = document.getElementById('planes-list');

for(var x in xPlanes) {
  e.innerHTML += "<li>" + x + "</li>";
  e.innerHTML += "<p>" + xPlanes[x] + "</p>";
  e.innerHTML += "<img src = 'X-Planes/" + x + ".jpg'>"
}
