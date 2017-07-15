console.log("main2.js");

let splitValues = function(value){
	let arrayOfNumbers = value.split("");
	for (let i = 0; i < arrayOfNumbers.length; i++) {
	arrayOfNumbers[i] = Number(arrayOfNumbers[i]);
}
return arrayOfNumbers;
}

//console.log("splitValues", splitValues(document.getElementById("numberVal").value));

function squareAndAdd(passedValue) {
	let processedVals = [];

	let i =0;
	while(i < passedValue.length) {
		let squareAndAdd = passedValue[i] * passedValue[i];
		processedVals.push(squareAndAdd);
		i++;
	}
	let allTogether = 0;
	for (let i = 0; i < processedVals.length; i++) {
		allTogether+=processedVals[i];
	}
	return allTogether;
}
var count = 0;

function checkHappy(passedValue) {

	if (passedValue===1 || passedValue=== 7) {
		console.log(testThisNumber, "is a happy number!");
	} else {
		let checkdigits = passedValue.toString();
		if (checkdigits.length === 1) {
			console.log(testThisNumber, "is a sad number!");
			//so sad	
		} else {
			checkdigits  =splitValues(checkdigits);
			let newNumber = squareAndAdd(checkdigits);
			checkHappy(newNumber);
		}
	}

}

function checkHappys(passedValue) {

		if (passedValue===1 || passedValue ===7 ) {

		//console.log(testThisNumbers, "is a happy number!");
			return true;
	} else {
		let checkdigits = passedValue.toString();
		if (checkdigits.length === 1) {
			//console.log(testThisNumbers, "is a sad number!");
			//so sad	
			return false;
		} else {
			checkdigits  =splitValues(checkdigits);
			let newNumber = squareAndAdd(checkdigits);
			return checkHappys(newNumber);
		}
	}
}




let button = document.getElementById("btn-checkvalue");
let testThisNumber;
button.addEventListener("click", function(){
	testThisNumber = document.getElementById("numberVal").value;
	let testThis = splitValues(testThisNumber);
	testThis = squareAndAdd(testThis);
	testThis = checkHappy(testThis);

	//let testThis = checkHappy(squareAndAdd(splitValues(testThisNumber)))
})

var buttons = document.getElementById("btn-checkvalues");
var testThisNumbers;
buttons.addEventListener("click", function(){
	testThisNumbers = document.getElementById("numberVal").value ;
	a();
	
}
	
	
	//let testThis = checkHappy(squareAndAdd(splitValues(testThisNumber)))
)
function a() {
for (var j = 0; j < testThisNumbers; j++) {
	checkHappys(j);
	if(checkHappys(j)===true) {
		document.getElementById("p").innerHTML += j +" " ;
	}
	}
}
for (var i = 0; i < 1001; i++) {
	checkHappys(i);
	if(checkHappys(i)===true) {
		console.log(i);
	}
	
}