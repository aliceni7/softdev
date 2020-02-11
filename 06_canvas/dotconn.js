var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

i = 0;
prevX = 0;
prevY = 0;

var clearCanvas = function(e) {
    prevX = 0;
    prevY = 0;
    i = 0;
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

var draw = function(e) {
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.strokeStyle = "#f5df04";
    ctx.stroke();
    ctx.fillStyle = "#f5df04";
    ctx.fill();
    if (i == 0){
	prevX = x;
	prevY = y;
	i++;
    }
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#043487";
    ctx.stroke();
    prevX = x;
    prevY = y;
}

var button = document.getElementById("clear");
button.addEventListener('click', clearCanvas);

canvas.addEventListener('click',draw);
