function showSquareFigure (arg) {
	let star = '';
	for (let i = 0; i < arg; i++) {
		star += ' *';
		for (let j = arg - 2; j > 0; j--){
			star += ' *';
		}
	}
	star += ' *';
	console.log(star);
}
showSquareFigure(5);