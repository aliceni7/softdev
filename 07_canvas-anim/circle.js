var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");


r = 0;

var drawCircle = function(e) {
    while (r <= 250){
	ctx.beginPath();
	ctx.arc(250, 250, r, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#ff0000";
	ctx.fill();
	r++;
    }
    while (r >= 0){
	ctx.beginPath();
	ctx.arc(250, 250, r, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#ff0000";
	ctx.fill();
	r--;
    }
}

window.requestAnimationFrame(drawCircle);

var start = document.getElementById("start");
start.addEventListener('click', drawCircle);
