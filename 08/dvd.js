/*var logo = new Image();
logo.src = "logo_dvd.jpg";

ctx.drawImage( ? ); */

var canvas = document.getElementById("dvd");
var ctx = canvas.getContext("2d");

var clearCanvas = function(e) {
    ctx.clearRect(0,0,500,500);
}


var id = 0;
var x = 0;
var y = 0;
var moveDVD = true;
//var logo = new Image();
//logo.src = "logo_dvd.jpg";

var startAnim = function(e) {
    window.cancelAnimationFrame(id);
    if (moveDVD) {
	console.log(moveDVD);
	clearCanvas();
	ctx.beginPath();
	ctx.arc(x += 1, y += 1, 5, 0, 2 * Math.PI);
	ctx.fillStyle = "#f5df04";
	ctx.fill();
	//ctx.drawImage(logo.src, x += 1, y += 1);
    }
    id = window.requestAnimationFrame(startAnim);
}

var buttonStart = document.getElementById("start");
buttonStart.addEventListener('click', startAnim);
