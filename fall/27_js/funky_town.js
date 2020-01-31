var fact = function(n){
  if (n == 1){
    return 1;
  }
  return n * fact(n - 1);
}

var fib = function(n){
    if (n > 1){
	return fib(n-1) + fib(n-2);
    }
    if (n == 1){
	return 1;
    }
    return 0;
}

var gcd = function(a,b){
    while( b ){
	var x = b;
	b = a % x;
	a = x;
    }
    return a;
}

var studentlist = ["Bob", "Jane", "Ed", "Chan", "Jason", "Hoiley", "TP", "Steve", "Vivi"];

var randomStudent = function(a){
    var l = a.length;
    var rand = Math.floor(Math.random(l) * l + 1);
    return a[rand - 1];
}
