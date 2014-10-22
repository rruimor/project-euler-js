var result = 0;
var previous_one = 1;
var previous_two = 0;
var current_value = 0;
var limit = 4000000;

while(current_value < limit){
	if( isEven(current_value) ){
		result += current_value;
	}
	current_value = previous_one + previous_two;
	previous_two = previous_one;
	previous_one = current_value;
}

console.log("Last Value: " + current_value);
console.log("Sum of all the values: " + result);

function isEven(number){
	if(number % 2 === 0){
		return true;
	}
	else{
		return false;
	}
}