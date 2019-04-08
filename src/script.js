var azEl = document.getElementById("AZ");
var listEl = document.getElementById("List");
var textArea = document.getElementById("textArea");
var StringText = "";
var words = [];

function takeWords(){
	StringText = textArea.value;
	words = StringText.split("\n");
}

function sortInTurn(){
	takeWords();
	listEl.innerHTML = words.join("<br>");
}

function sortAZ(){
	takeWords();

	words.sort();

	if (azEl.value == "Sort A to Z") {
		azEl.value = "Sort Z to A";
	} else {
		words.reverse();
		azEl.value = "Sort A to Z";
	}
	listEl.innerHTML = words.join("<br>");
}

function sortLtext(){
	takeWords();
	var temp;
	for (var i=0; i < words.length; i++){

		for (var j=1; j < words.length; j++){
			if (words[j-1].length > words[j].length){
				temp = words[j];
				words[j] = words[j-1];
				words[j-1] = temp;
			}
		}
	}
	listEl.innerHTML = words.join("<br>");
}

function Random(){
	takeWords();
	var n = words.length, temp, x;
	for (i=0; i < n; i++ ) {
		x = Math.floor(Math.random()*n);
		temp = words [i];
		words[i] = words[x];
		words[x] = temp;
	}

	listEl.innerHTML = words.join("<br>");
}
