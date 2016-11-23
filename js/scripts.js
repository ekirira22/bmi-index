
var bmi = function (value1, value2){
	return value1/(value2 * value2);
};
var value1 = parseInt(prompt("Please Enter your Weight in Kg"));
var value2 = parseFloat(prompt("Please Enter your Height in Metres"));
alert(bmi(value1, value2));
