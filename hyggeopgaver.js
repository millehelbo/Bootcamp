var navn = "";
var alder = "";
var adresse = "";

var fejlbeskeder = "";

if (navn == "") {
	fejlbeskeder += "Du skal udfylde navn feltet\n";
}

if (alder == "") {
	fejlbeskeder += "Du skal udfylde alder feltet\n";
}

if (adresse == "") {
	fejlbeskeder += "Du skal udfylde adresse feltet\n";
}

console.log (fejlbeskeder);

let i;
for (i = 1; i < 138; i++){
    console.log(i);
 }

