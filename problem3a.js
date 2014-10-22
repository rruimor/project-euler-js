function isPrime(n){
	if(n<1){
		return false;
	}
	else if(n===1){
		return true;
	}
	else{
		for(i=2; i<n; i++){
			if(n % i === 0){
				return false;
			}
		}
	}
	return true;
}

var arrayIntegers=function(start,end,c){
	c = [];
	for(i=0;i<=(end-start);i++){
		c[i]= start + i;
	}
	return c;
};

function find_primes(n){
	return arrayIntegers(2,n).filter(isPrime);
}

function trial_division(n){
	if(n===1){return n};

	var primes = find_primes(Math.floor(Math.pow(n,0.5))+1);
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

print(trial_division(1000));