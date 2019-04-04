var StringText = document.getElementById("textArea").value;
var Words = []
Words = StringText.split(",");

var azEl = document.getElementById("AZ");
var listEl = document.getElementById("List");

function sortInTurn(){

	listEl.innerHTML = Words.join("<br>");
}

function sortAZ(){

	Words.sort();

	if (azEl.value == "Sort A to Z") {
		azEl.value = "Sort Z to A";
	} else {
		Words.reverse();
		azEl.value = "Sort A to Z";
	}
	listEl.innerHTML = Words.join("<br>");
}

function sortLtext(){

	var temp;
	for (var i=0; i < Words.length; i++){

		for (var j=1; j < Words.length; j++){
			if (Words[j-1].length > Words[j].length){
				temp = Words[j];
				Words[j] = Words[j-1];
				Words[j-1] = temp;
			}
		}
	}
	listEl.innerHTML = Words.join("<br>");
}

function Random(){
	var n = Words.length, temp, x;
	for (i=0; i < n; i++ ) {
		x = Math.floor(Math.random()*n);
		temp = Words [i];
		Words[i] = Words[x];
		Words[x] = temp;
	}

	listEl.innerHTML = Words.join("<br>");
}

function test (){

	console.log (Words[0]);
	console.log (Words[1]);
	console.log (Words[2]);
	console.log (Words[3]);
	console.log (Words[4]);
}