

//intitiate, create, or declaring
var heightI = 0;
var heightF = 0; 
var weight = 0;
var bmi = 0;
var data = [heightI, heightF, weight, bmi];

//asking user for their weight 
weight = prompt("Enter your weight in pounds. \n");

//confirmation of weight
console.log("Your weight is " + weight + " pounds.");

//asking user for their height in feet 
heightF = parseInt(prompt("Enter your height in feet. \n"));

//asking user for their height in inches
heightI = parseInt(prompt("Enter your height in inches. \n"));

//confirmation of height
console.log("You are " + heightF + " feet, " + heightI + " inches."); 

//heightI was reassigned to 64 (5 x 12 + 4)
heightI = (heightF * 12) + heightI;


// BMI algorithm
function calcBMI(w, hI){
	bmi = (w * 703) / (hI*hI);
	bmi = bmi.toFixed(2);
	return bmi;
}



//printing bmi (confirmation)
console.log("Your BMI is " + calcBMI(weight, heightI));

//if bmi is less than 18.5 then print "Underweight"
function calcDiv(){
if(bmi < 18.5){
	return "Underweight."
}

//if bmi is less than or equal to 24.9, and bmi is greater than or equal to 18.5 then print "Normal"
if(bmi <= 24.9 && bmi >= 18.5){
	return "Normal.";
}

//if bmi is less than or equal to 29.9, and bmi greater than or equal to 25 then print "Overweight"
if(bmi <= 29.9 && bmi >= 25){
	return "Overweight."
}

//if bmi is greater than or equal to 30, then print "Obese".
if(bmi >= 30){
	return "Obese."
}
}
console.log("You are " + calcDiv());
weight = prompt("Enter goal weight:");
console.log("Your new BMI is " + calcBMI(weight, heightI));
console.log("You will be " + calcDiv());