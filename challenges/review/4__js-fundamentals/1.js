// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.

function numOnly(num) {
    if ( num % 3 === 0 ) {
        return true;
    } else {
        return false;
    }
}

let testcases = [
    1, 2, 4, 3, 6, 9, 15, 17
]
let expected = [
    false, false, false, true, true, true, true, false
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

testMe(1, numOnly, testcases, expected);