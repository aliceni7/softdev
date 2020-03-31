// Alice Ni
// SoftDev pd 9
// K14 : Ask Circles [Change || Die] While Moving
// 2020 03 31



var pic = document.getElementById("vimage");
prevX = null;
prevY = null;
id = 0;

var draw = function(e) {
    if (e.target == pic){
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var x = e.offsetX; // x coordinate of click
	var y = e.offsetY; // y coordinate of click
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", "10");
	c.setAttribute("fill", "#4ad4b5");
	c.setAttribute("stroke", "black");
	if (Math.random() * 10 > 5){
	    c.setAttribute("tx", 2); //keeps track of direction the circles move in
	    c.setAttribute("ty", 2);
	}
	else{
	    c.setAttribute("tx", -2);
	    c.setAttribute("ty", -2);
	}
	pic.appendChild(c); // adds circle to svg picture
    }
    else if (e.target.getAttribute("fill") == "#4ad4b5") { // if event is on a blue circle
	e.target.setAttribute("fill", "#b74ad4"); //change color to purple
    }
    else{
	pic.removeChild(e.target); // removes purple circle
	var x = Math.random() * 500 //generate random x coordinate
	var y = Math.random() * 500 //generate random y coordinate
	var k = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	k.setAttribute("cx", x);
	k.setAttribute("cy", y);
	k.setAttribute("r", "10");
	k.setAttribute("tx",2);
	k.setAttribute("ty",2);
	k.setAttribute("fill", "#4ad4b5");
	k.setAttribute("stroke", "black");
	pic.appendChild(k); // adds circle to svg picture
    }
}

var move = function(e) {
     circles = document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "circle")  // returns a list of all the elements that are circles
    for( var i = 0; i < circles.length; i++ ) { 
	var c = circles[i]
	var x = parseInt(c.getAttribute("cx")); //converts string to int
	var y = parseInt(c.getAttribute("cy"));
	var r = parseInt(c.getAttribute("r"));
	var tx = parseInt(c.getAttribute("tx"));
	var ty = parseInt(c.getAttribute("ty"));
	if ( x >= 500 - r ) { // if circle touches right 
	    c.setAttribute("tx",-2);
	}
	else if (x <= r) { // if circle touches left
	    c.setAttribute("tx",2);
	}
	if( y >= 500 - r ) { // if circle touches top
	    c.setAttribute("ty",-2);
	}
	else if ( y <= r ){ // if circle touches bottom
	    c.setAttribute("ty",2);
	}	
	x += tx;
	y += ty;
	c.setAttribute("cx",x);
	c.setAttribute("cy",y);
    }
    if (id != 0) {
	id = window.requestAnimationFrame(move);
    }
}
var change = 1;

var xtra = function(e) {
    circles = document.getElementsByTagNameNS("http://www.w3.org/2000/svg","circle");
    for( var i = 0; i < circles.length; i++ ) {
	var c = circles[i];
	var r = parseInt(c.getAttribute("r"));
	var x = parseInt(c.getAttribute("cx")); 
	var y = parseInt(c.getAttribute("cy"));
	var r = parseInt(c.getAttribute("r"));
	var tx = parseInt(c.getAttribute("tx"));
	var ty = parseInt(c.getAttribute("ty"));
	if (r == 26) {
	    change = -1;
	}
	if (r == 1) {
	    change = 1;
	}
	r += change;
	c.setAttribute("r",r);
	c.setAttribute("fill", "#d44a4a");
    }
    id = window.requestAnimationFrame(xtra);
}

var clearsvg = function(e) {
    while (pic.lastChild) { // while there are still shapes
      pic.removeChild(pic.lastChild); //remove the previously drawn shape
    }
    window.cancelAnimationFrame(id);
    id = 0;
}

var move_anim = function(e) {
    window.cancelAnimationFrame(id);
    id = window.requestAnimationFrame(move);
}

var xtra_anim = function(e) {
    window.cancelAnimationFrame(id);
    id = window.requestAnimationFrame(xtra);
}

var clearbutton = document.getElementById("clear");
clearbutton.addEventListener('click', clearsvg);

var movebutton = document.getElementById("move");
movebutton.addEventListener('click', move_anim);

var xtrabutton = document.getElementById("xtra");
xtrabutton.addEventListener('click', xtra_anim);

pic.addEventListener('click', draw);
