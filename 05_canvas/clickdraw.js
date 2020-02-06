var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

var clearCanvas = function(e) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

var mode = "square";

var toggle = function(e){
    var currentMode = document.getElementById("hh");
    if (mode == "square"){
	mode = "dot";
	hh.innerHTML = "Dot";
    }
    else {
	mode = "square";
	hh.innerHTML = "Square";
    }
    console.log(mode);
}

var draw = function(e) {
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    if (mode == "square"){
	ctx.fillStyle = "#d283f0";
	ctx.fillRect(x,y,20,20);
    }
    else {
	ctx.beginPath(); //begins a path based on where the user's mouse is
	ctx.arc(x, y, 10, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#f49561";
	ctx.fill();
    }
}

var button = document.getElementById("clear");
button.addEventListener('click', clearCanvas);

var tog = document.getElementById("toggle");
tog.addEventListener('click', toggle);

canvas.addEventListener('click',draw);
