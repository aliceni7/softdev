var button = document.getElementById("clear");
button.addEventListener('click', clearCanvas);

var clearCanvas = function(e) {
    var canvas = document.getElementById("slate");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'green';
    ctx.fillRect(10,10,150,100);
}
    

			
