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
