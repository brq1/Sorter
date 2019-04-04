var azEl = document.getElementById("AZ");
var listEl = document.getElementById("List");

function takeWords(){
	var StringText = document.getElementById("textArea").value;
	Words = StringText.split(",");
	for (i=0 ; i< Words.length; i++){
		Words[i].trim();
	}
	//Words.trim();
}

function sortInTurn(){
	takeWords();
	listEl.innerHTML = Words.join("<br>");
}

function sortAZ(){
	takeWords();

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
	takeWords();
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
	takeWords();
	var n = Words.length, temp, x;
	for (i=0; i < n; i++ ) {
		x = Math.floor(Math.random()*n);
		temp = Words [i];
		Words[i] = Words[x];
		Words[x] = temp;
	}

	listEl.innerHTML = Words.join("<br>");
}

/*function test (){
	//alert (takeWords());
	alert (Words[4].trim());

}*/