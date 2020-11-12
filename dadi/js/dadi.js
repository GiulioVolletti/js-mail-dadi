console.log("Hello World!");
// Gioco dei dadi, chi fa di più vince.
// Generare un numero random da 1 a 6
var nRandom = (Math.random() * 5).toFixed();
var numCasuale = ++nRandom
console.log(numCasuale);
// Generare un numero da 1 a 6, giocatore
var numGiocatore = (Math.random() * 5).toFixed();
var numCasualeGiocatore = ++numGiocatore
console.log(numCasualeGiocatore);
// vincitore, in base a chi fa il punteggio più alto.

if (numCasuale < numGiocatore ) {
  document.getElementById('dadi').innerHTML= "numero generato " + numCasuale + " numero giocatore " + numCasualeGiocatore + "<div>hai vinto<div>"
} else if (numCasuale > numGiocatore) {
  document.getElementById('dadi').innerHTML= "numero generato " + numCasuale + " numero giocatore " + numCasualeGiocatore + "<div>hai perso<div>"
} else {
  document.getElementById('dadi').innerHTML= "numero generato " + numCasuale + " numero giocatore " + numCasualeGiocatore + "<div>hai pareggiato<div>"
}
