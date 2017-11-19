

function start() {

var myNumber = Math.floor(Math.random()* 12);
var croupierNumber = Math.floor(Math.random()* 12);
var tirageJoueur = document.getElementById('tiragejoueur');
var tirageCroupier = document.getElementById('tiragecroupier');
tirageJoueur.innerHTML = myNumber;

}


function pioche(){

var mySecondNumber = Math.floor(Math.random()* 12);
var croupierSecondNumber = Math.floor(Math.random()* 12);
var myNumber = (mySecondNumber+myNumber);
var croupierNumber = (croupierSecondNumber+croupierNumber);
}

function result(){

  var phrase = document.getElementById('phrase');

  if (myDraw>croupierDraw) {
     phrase.innerHTML = "Vous avez gagné";
  } else {
    phrase.innerHTML = "Vous avez perdu";
  }
}
