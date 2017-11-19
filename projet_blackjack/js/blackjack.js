function result() {

var myNumber = document.getElementById('myNumber').value;
var croupierNumber = Math.floor(Math.random()* 11);
var result = document.getElementById('resultat');
var final = document.getElementById('phrase');
result.innerHTML = croupierNumber;



if (myNumber>croupierNumber) {
   phrase.innerHTML = "Vous avez gagné";
} else {
  phrase.innerHTML ="Vous avez perdu";
}


}
