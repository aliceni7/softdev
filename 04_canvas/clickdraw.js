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
	hh.innerHTML = "dot";
    }
    else {
	mode = "square";
	hh.innerHTML = "square";
    }
    console.log(mode);
}

var draw = function(e) {
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    if (mode == "square"){
	ctx.fillRect(x,y,20,20);
	ctx.fillStyle = "#00ff00";
    }
    else {
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#0000ff";
	ctx.fill();
    }
}

var button = document.getElementById("clear");
button.addEventListener('click', clearCanvas);

var tog = document.getElementById("toggle");
tog.addEventListener('click', toggle);

canvas.addEventListener('click',draw);
