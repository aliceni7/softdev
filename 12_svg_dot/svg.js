var pic = document.getElementById("vimage");
prevX = null
prevY = null
i = 0

var draw = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var x = e.offsetX; // x coordinate of click
    var y = e.offsetY; // y coordinate of click
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke", "black");
    pic.appendChild(c); // adds circle to svg picture
    if( i == 0 ){
	prevX = x;
	prevY = y;
	i++;
    }
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line")
    l.setAttribute("x1", prevX);
    l.setAttribute("y1", prevY);
    l.setAttribute("x2", x);
    l.setAttribute("y2", y);
    l.setAttribute("style", "stroke:green;stroke-width:2")
    pic.appendChild(l) // adds line to svg picture
    prevX = x
    prevY = y

}

var clearsvg = function(e) {
  while (pic.lastChild) { // while there are still shapes
    pic.removeChild(pic.lastChild); //remove the previously drawn shape
  }
    prevX = null;
    prevY = null;
    i = 0;
}

var clearbutton = document.getElementById("clear");
clearbutton.addEventListener('click', clearsvg);
pic.addEventListener('click', draw);
