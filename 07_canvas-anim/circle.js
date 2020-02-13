//Leia Park & Alice Ni
//SoftDev1 pd9
//K07 -- They lock us in the tower whenever we get caught ...which is often
//2020-02-12

var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");

var radius = 5;
var change = 1;
var id = 0;


function clear() {
    ctx.clearRect(0, 0, 500, 500);
}

function startAnim() {
    window.cancelAnimationFrame(id); //necessary because it stops the previous requestAnimationFrame call, so it prevents the animation speed from increasing
    if (radius == 250) {
	change = -1;
    }
    if (radius == 0) {
	change = 1;
    }
    clear();
    ctx.beginPath();
    ctx.arc(250, 250, radius += change, 0, 2 * Math.PI);
    ctx.fillStyle = "#f5df04";
    ctx.fill();
    id = window.requestAnimationFrame(startAnim);
};

function stopAnim() {
    window.cancelAnimationFrame(id);
}


var buttonStart = document.getElementById("start");
buttonStart.addEventListener('click', function(e) {
    id = window.requestAnimationFrame(startAnim);
});

var buttonStop = document.getElementById("stop");
buttonStop.addEventListener('click', stopAnim);
