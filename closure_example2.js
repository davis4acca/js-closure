(function() {
	// An example to fully understand closures
	var arrOfFunctions = [];

	for (var i = 0; i <= 4; i++) {
		arrOfFunctions.push(function() {
			// pushes a function which points to i;
			return i;
		});
	}

	arrOfFunctions.forEach((fn) => {
		var x = fn(); // 5, 5, 5, 5, 5
	});
})();
(function() {
	var arrOfFunctions = [];

	for (var i = 0; i <= 4; i++) {
		// a function which gets executed immediately and passed in the current i value
		(function(i) {
			// a new scope with a new var i  gets created on every iteration of the loop
			arrOfFunctions.push(function() {
				return i;
			});
		})(i);
	}

	arrOfFunctions.forEach((fn) => {
		var x = fn(); // 0, 1, 2, 3, 4
		x;
	});
})();

(function() {
	var arrOfFunctions = [];

	for (let i = 0; i <= 4; i++) {
		// creates a block scoped closure on every iteration
		arrOfFunctions.push(function() {
			return i;
		});
	}

	arrOfFunctions.forEach((fn) => {
		var x = fn(); // 0, 1, 2, 3, 4
		x;
	});
})();
