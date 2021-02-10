// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

let numChars = function(str) {
    return str.length;
}

let testcases = [
    "apple", "banana", "celery", "cheese", "I love cows"
]
let expected = [
    5, 6, 6, 6, 11
]

let prtTitle = function(num) { console.log(`
------ Challenge ${num} ------`);
}

let testMe = function(num, funct, testcases, expected, option = 1) {
	prtTitle(num);
	for ( let test of testcases ) {
		let expect;
		if ( funct(test) === expected[testcases.indexOf(test)] ) {
			expect = ["✓"];
		} else {
			expect = ["expect:", expected[testcases.indexOf(test)]];
		}
		if ( option == 0 ) {
			console.log(...expect);
		} else {
			console.log(funct(test), ...expect);
		}
	}
}

testMe(2, numChars, testcases, expected);