var render = function(e){
    var data = document.getElementById('data');

    var margin = {top: 10, right: 30, bottom: 30, left: 100},
	width = 500 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

    d3.select("data")
	.text('hi')
}
    



var rnder = document.getElementById("render");
rnder.addEventListener('click', render);
