var button = document.getElementById("button1");
var borrowedInput = document.getElementById("amountBorrowed");
var rateInput = document.getElementById("interestRate");
var repayInput = document.getElementById("repayments");
var outputDiv = document.getElementById("output");
//click button to run calculate function
button.addEventListener('click',calculate,false);

function calculate(){
	//parse amounts from inputs
	var borrowed = parseFloat(borrowedInput.value);
	var rate = parseFloat(rateInput.value);
	var repay = parseFloat(repayInput.value);
	//get monthly multiplicative rate
	var rateDec = (rate / 100) + 1;
	var monthRate = Math.pow(rateDec,1 / 12);
	if ((borrowed * monthRate) - borrowed > repay){
		outputDiv.innerHTML = "You will NEVER pay off this mortgage!";
	}
	else{
		var remaining = borrowed;
		var months = 0;
			while (remaining > 0){
				remaining *= monthRate;
				remaining -= repay;
				months ++;
				
			}
		var years = Math.floor(months/12);
		smallMonths = months - years * 12;
		outputDiv.innerHTML = "you will eventually pay this off<br> it will take you " + months + " months :)<br>Which is " + years + " years and " + smallMonths + " months";
	}
}