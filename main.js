//The Repeater module should contain the following two methods:

//repeatString(str, n) - Returns a string repeated n times:
//e.g. repeatString('cat', 3) should return 'catcatcat'.
//repeatFunction(f, n) - Calls a function n times.
//e.g. repeatFunction(function() { console.log('hi'); }, 3) should print out 'hi' to the console three times in a row.

// Part I: Organizing code with object literals

// var Repeater = {

// 	repeatString: function(str, n) {
// 		var  concatString = [];
// 		for (var i=0; i<n; i++) {
// 			concatString.push(str);
// 		}
// 		return concatString.join('');
// 	},

// 	repeatFunction: function(f, n) {
// 		for (var i=0; i<n; i++) {
// 			f();
// 		}
// 	}

// };

// Part II: Organizing code with the module pattern

var Repeater = (function() {

	var count = 0;
	
	var repeatString = function(str, n) {
		concatString = [];
		for (var i=0; i<n; i++) {
			concatString.push(str);
		}
		return concatString.join('');
	};

	var repeatFunction = function(f, n) {
		for (var i=0; i<n; i++) {
			f();
		}
	};

	var repeatMore = function(str) {
		var concatString = [];
		for (var i=0; i<=count; i++) {
			concatString.push(str);
		}
		count++;
		return concatString.join('');
	};

	return {
		"repeatString": repeatString,
		"repeatFunction": repeatFunction,
		"repeatMore": repeatMore
	};

})();

// Part III: Organizing code with the revealing module pattern




