// function showTriangleFigure (num) {
// 	let result = "";

// 	for (let i = 0; i < num; i ++){				
// 		for (let j = 0; j < i +1 ; j++) {
// 			result += "*"
// 		}
// 		console.log(result);
// 		result = "";
// 	}
// }	
// showTriangleFigure(5);

// function showFreeTriangleFigure (num) {
// 	let result = "";
	
// 	for (let i = 0; i < num; i ++){				
// 		for (let j = 0; j <= i  ; j++) {
// 			if (i == 0 || i == num - 1 || j == 0 || j == i  ) {
// 				result += "*"
// 			} else {
// 				result += " ";
// 			}
			
// 		}
// 		console.log(result);
// 		result = "";
// 	}
// }	
// showFreeTriangleFigure(5);



// function showSquareFigure (num) {
// 	let result = "";
// 	for (let i = 1; i < num; i ++) {
// 		for (let j = 1; j < num; j++) {
// 			result += "*";
// 		}
// 		console.log(result);
// 		result = "";
// 	}
	
// }

// showSquareFigure(5);


// function showFreeSquareFigure (num) {
// 	let result = "";
// 	for (let i = 1; i <= num; i ++) {
// 		for (let j = 1; j <= num; j++) {
// 			if (i == 1 || i == num  || j == 1 || j == num) {
// 				result += " *";
// 			} else {
// 				result += "  ";
// 			}
// 		}
// 		console.log(result);
// 		result = "";
// 	}
// }

// showFreeSquareFigure(5);

// function sandClock(n) {
// 	let result = ""
// 	for (let i = 1; i <= n; i++) {
// 		 for (let k = 1; k < i; k++) {
// 			  result += "  ";
// 		 }
// 		 for (let j = i; j <= n; j++) {
// 			 result += " *  ";
// 		 }
// 		 console.log(result);
// 		 result = "";
// 		}
		

// 	for (let i = n - 1; i >= 1; i--) {
// 		 for (let k = 1; k < i; k++) {
// 			  result += "  ";
// 		 }
// 		 for (let j = i; j <= n; j++) {
// 			  result += " *  ";
// 		 }
// 		 console.log(result)
// 		 result = "";
// 	}
// }
freeSandClock(7);
function sandClock(n) {
	let result = ""
	for (let i = 1; i <= n; i++) {
		 for (let k = 1; k < i; k++) {
			  result += "  ";
		 }
		 for (let j = i; j <= n; j++) {
			 result += " *  ";
		 }
		 console.log(result);
		 result = "";
		}
		

	for (let i = n - 1; i >= 1; i--) {
		 for (let k = 1; k < i; k++) {
			  result += "  ";
		 }
		 for (let j = i; j <= n; j++) {
			  result += " *  ";
		 }
		 console.log(result)
		 result = "";
	}
}
freeSandClock(7);






