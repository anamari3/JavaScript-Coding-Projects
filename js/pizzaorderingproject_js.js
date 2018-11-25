function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text1 = text1+selectedSize+" - $"+sizeTotal+".00"+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text1 = text1+selectedSize+" - $"+sizeTotal+".00"+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text1 = text1+selectedSize+" - $"+sizeTotal+".00"+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text1 = text1+selectedSize+" - $"+sizeTotal+".00"+"<br>";
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1); // All three of these variables will be passed on to each function
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			var selectedCrust = crustArray[j].value;
		}
	}
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
		text1 = text1+selectedCrust+" - $"+crustTotal+".00"+"<br>";
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
		text1 = text1+selectedCrust+" - $"+crustTotal+".00"+"<br>";
	} else if (selectedCrust === "Cheeese Stuffed Crust") {
		crustTotal = 3;
		text1 = text1+selectedCrust+" - $"+crustTotal+".00"+"<br>";
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
		text1 = text1+selectedCrust+" - $"+crustTotal+".00"+"<br>";
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
		text1 = text1+selectedCrust+" - $"+crustTotal+".00"+"<br>";
	}
	tempTotal = text1+crustTotal+"<br>";
	runningTotal = (runningTotal+crustTotal);
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getSauce(runningTotal,text1);
}

function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var k = 0; k < sauceArray.length; k++) {
		if (sauceArray[k].checked) {
			var selectedSauce = sauceArray[k].value;		}
	}
	if (selectedSauce === "Marinara Sauce") {
		sauceTotal = 0;
		text1 = text1+selectedSauce+" - $"+sauceTotal+".00"+"<br>";
	} else if (selectedSauce === "White Sauce") {
		sauceTotal = 0;
		text1 = text1+selectedSauce+" - $"+sauceTotal+".00"+"<br>";
	} else if (selectedSauce === "Barbeque Sauce") {
		sauceTotal = 0;
		text1 = text1+selectedSauce+" - $"+sauceTotal+".00"+"<br>";
	} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0;
		text1 = text1+selectedSauce+" - $"+sauceTotal+".00"+"<br>";
	}
	runningTotal = (runningTotal+sauceTotal);
	console.log(selectedSauce+" = $"+sauceTotal+".00");
	console.log("sauce text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCheese(runningTotal,text1);
}

function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var l = 0; l < cheeseArray.length; l++) {
		if (cheeseArray[l].checked) {
			var selectedCheese = cheeseArray[l].value;
		}
	}
	if (selectedCheese === "Regular Cheese") {
		cheeseTotal = 0;
		text1 = text1+selectedCheese+" - $"+cheeseTotal+".00"+"<br>";
	} else if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
		text1 = text1+selectedCheese+" - $"+cheeseTotal+".00"+"<br>";
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
		text1 = text1+selectedCheese+" - $"+cheeseTotal+".00"+"<br>";
	}
	runningTotal = (runningTotal+cheeseTotal);
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1);
}

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var m = 0; m < meatArray.length; m++) {
		if (meatArray[m].checked) {
			selectedMeat.push(meatArray[m].value);
			console.log("selected meat item: ("+meatArray[m].value+")");
			text1 = text1+meatArray[m].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getVeggie(runningTotal,text1);
}

function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var n = 0; n < veggieArray.length; n++) {
		if (veggieArray[n].checked) {
			selectedVeggie.push(veggieArray[n].value);
			console.log("selected veggie item: ("+veggieArray[n].value+")");
			text1 = text1+veggieArray[n].value+"<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML = text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};