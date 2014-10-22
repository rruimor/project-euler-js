function eratosthenes(n){
	var array = [], upperLimit = Math.sqrt(n), output = [];

	for (var i = 0; i < n ; i++) {
		array.push(true);
	}

	for (var i = 2; i <= upperLimit; i++) {
		if(array[i]) {
			for (var j = i * i; j < n; j+= i) {
				array[j] = false;
			}
		}
	}

	for (var i = 2; i < n; i++) {
		if(array[i]){
			output.push(i);
		}
	}

	return output;
}

function trial_division(n){
	if(n===1){return n};

	var primes = eratosthenes(Math.floor(Math.pow(n,0.5))+1);
	var prime_factors = [];

	for(var p in primes){
		if(primes[p]*primes[p] > n){break};
		while(n % primes[p] == 0){
			prime_factors.push(primes[p]);
			n /= primes[p];
		}
	}
	if(n>1){prime_factors.push(n)};

	return prime_factors;

}

print(trial_division(600851475143));