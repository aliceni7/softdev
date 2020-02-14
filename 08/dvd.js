/*var logo = new Image();
logo.src = "logo_dvd.jpg";

ctx.drawImage( ? ); */

var canvas = document.getElementById("dvd");
var ctx = canvas.getContext("2d");

var clearCanvas = function(e) {
    ctx.clearRect(0,0,500,500);
}


var dvdid = 0;
var circleid = 0;
var radius = 5;
var change = 1;
var x = Math.floor(Math.random() * 470);
var y = Math.floor(Math.random() * 470);
var moveX = 1;
var moveY = 1;
var moveDVD = true;
var logo = new Image();
logo.src = "logo_dvd.jpg";


var movieSetup = function() {
    window.cancelAnimationFrame(circleid);
    window.cancelAnimationFrame(dvdid);
    
    var x = Math.floor(Math.random() * 470);
    var y = Math.floor(Math.random() * 470);
    var moveX = 1;
    var moveY = 1;
  
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    
    var startMovieAnim = function(e) {
	clearCanvas();
	ctx.beginPath();
	ctx.drawImage(logo, x += moveX, y += moveY);
	console.log(x);
	console.log(y);
	if (x >= ( canvas.width - 60) || x <= 0) { // also not completely random path yet
	    moveX *= -1;
	}
	if (y >= ( canvas.width - 49) || y <= 0) { // does not bounce off the right wall properly
	    moveY *= -1;
	}
	dvdid = window.requestAnimationFrame(startMovieAnim);
    }
    startMovieAnim();
}

var startCircleAnim = function(e) {
    window.cancelAnimationFrame(circleid); //necessary because it stops the previous requestAnimationFrame call, so it prevents the animation speed from increasing
    window.cancelAnimationFrame(dvdid);
    if (radius == 250) {
	change = -1;
    }
    if (radius == 0) {
	change = 1;
    }
    clearCanvas();
    ctx.beginPath();
    ctx.arc(250, 250, radius += change, 0, 2 * Math.PI);
    ctx.fillStyle = "#f5df04";
    ctx.fill();
    circleid = window.requestAnimationFrame(startCircleAnim);
}

var stopAnim = function(e) {
    window.cancelAnimationFrame(dvdid);
    window.cancelAnimationFrame(circleid);
}

var buttonStart = document.getElementById("movie");
buttonStart.addEventListener('click', movieSetup);

var buttonStop = document.getElementById("stop");
buttonStop.addEventListener('click', stopAnim);

var b = document.getElementById("circle");
b.addEventListener('click', startCircleAnim);


