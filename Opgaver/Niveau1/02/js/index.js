function beregnForhold(a, b) {
	let output = 0;
	output = a / b;
	return output;
}
beregnForhold(4, 3);
//console.log(beregnForhold(4, 3));

function beregnForhold2(a, b) {
	if (b == 0) {
		return null;
	}
	let output = 0;
	output = a / b;
	return output;
}
beregnForhold2(4, 0);
console.log(beregnForhold2(4, 0));
