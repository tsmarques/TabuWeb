function callOperation() {
	if (operation === "plus") {
		setTimeout(function() {
			sum(dif);
		}, 500);
	} 
	
	else if (operation === "sub") {
		setTimeout(function() {
			subtract(dif);
		}, 500);
	} 
	
	else if (operation === "mult") {
		setTimeout(function() {
			multiply(dif);
		}, 500);
	} 
	
	else if (operation === "divi") {
		setTimeout(function() {
			divide(dif);
		}, 500);
	}	
}