/*var logo = new Image();
logo.src = "logo_dvd.jpg";

ctx.drawImage( ? ); */

var canvas = document.getElementById("dvd");
var ctx = canvas.getContext("2d");

var clearCanvas = function(e) {
    ctx.clearRect(0,0,500,500);
}


var id = 0;
var x = 15;
var y = 15;
var moveX = 2;
var moveY = 7;
var moveDVD = true;
var logo = new Image();
logo.src = "logo_dvd.jpg";

var startAnim = function(e) {
    window.cancelAnimationFrame(id);
    if (moveDVD) {
	console.log(moveDVD);
	clearCanvas();
	ctx.beginPath();
	ctx.drawImage(logo, x += moveX, y += moveY);
	console.log(x);
	console.log(y);
	if (x >= 470 || x <= 0) { // also not completely random path yet
	    moveX *= -1;
	}
	if (y >= 470 || y <= 0) { // does not bounce off the right wall properly
	    moveY *= -1;
	}
    }
    id = window.requestAnimationFrame(startAnim);
}

var stopAnim = function(e) {
    window.cancelAnimationFrame(id);
}

var buttonStart = document.getElementById("movie");
buttonStart.addEventListener('click', startAnim);

var buttonStop = document.getElementById("stop");
buttonStop.addEventListener('click', stopAnim);
