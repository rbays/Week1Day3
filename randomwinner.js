var enterButton = document.getElementById("enter"),
	winnerButton = document.getElementById("getWinner"),
	nameBox = document.getElementById("nameInput"),
	winnerDiv = document.getElementById("winner"),
	entriesDiv = document.getElementById("entries"),
	nameArray = [];

//function to disply current entries
function displayEntries() {
	var entriesList = "The current entries are...<br>";
	for (i = 0; i < nameArray.length; i++) {
		entriesList += nameArray[i] + "<br>";
	}
	entriesDiv.innerHTML = entriesList;
}

//enter a person for the draw
enterButton.addEventListener('click',enter,false);

function enter() {
	var myItem = nameBox.value;
	if (myItem != "") {
		nameArray.push(myItem);
		displayEntries();
	}
}

//choose winner
winnerButton.addEventListener('click',chooseWinner,false);

function chooseWinner() {
	if (nameArray.length === 0) {
		winnerDiv.innerHTML = "There are no entries yet";
	}
	else{
		var winningIndex = Math.floor(Math.random()*nameArray.length);
		winner.innerHTML = "The winner is:<br>" + nameArray[winningIndex];
	}
}
