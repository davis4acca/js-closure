// Academic
// In programming languages, a closure (also lexical closure or function closure) is a technique for implementing lexically scoped name binding in a language with first-class functions.
// Simple
// A closure is when a function remembers its surrounding variables even when that function is executed outside that surrounding scope

//example 1

var closure = undefined;

function fn1() {
	var x = 'Secret text';

	function fn2() {
		console.log(x);
	}

	closure = fn2;
}

fn1();
// fn1 gets executed,
// fn2 gets declared but NOT executed
// closure now points to fn2

closure; // 	function fn2() {  console.log(x) };
// closure is now  pointint to fn2 which has a reference to x because of that x is alive even when fn1 has already returned!

closure(); //logs out "Secret text"
