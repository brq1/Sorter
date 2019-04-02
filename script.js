var Months = [ 
	"January",
	"February",
	"March",
	"April",
	"May",
	"Juni",
	"July",
	"August",
	"September",
	"Oktober",
	"November",
	"December"
]; 
var MonthsClone = Months.slice(0);

function sortInTurn(){

	document.getElementById("List").innerHTML = MonthsClone.join("<br>");
}

function sortAZ(){
	if (document.getElementById("AZ").value == "Sort A to Z") {
		Months.sort();
		document.getElementById("AZ").value = "Sort Z to A";
		document.getElementById("List").innerHTML = Months.join("<br>");
	}
	else{
		Months.sort();
		Months.reverse();
		document.getElementById("AZ").value = "Sort A to Z";
		document.getElementById("List").innerHTML = Months.join("<br>");
	}

}

function sortLtext(){

	var MlenghtText = [];
	var temp;
	for (var i=0; i < Months.length; i++){


		for (var j=1; j < Months.length; j++){
			if (Months[j-1].length > Months[j].length){
				temp = Months[j];
				Months[j] = Months[j-1];
				Months[j-1] = temp;
			}
		}
	}
	document.getElementById("List").innerHTML = Months.join("<br>");
}

function Random(){
	var n = Months.length, temp, x;
	for (i=0; i < n; i++ ) {
		x = Math.floor(Math.random()*n);
		temp = Months [i];
		Months[i] = Months[x];
		Months[x] = temp;
	}

	document.getElementById("List").innerHTML = Months.join("<br>");
}
