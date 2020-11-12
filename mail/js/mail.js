// Chiedi all’utente la sua email,
var mailUtente = prompt("inserire qui la tua mail")
console.log(mailUtente);

// mail di accesso utenti
var mailConsentite = ["pincopallo@smail.com" , "pdorfigliodikmer@gmail.com" , "anonimo@hotmail.it" , "boh@gmail.com"]
console.log(mailConsentite);
// controlla che sia nella lista di chi può accedere,
for (var accesso = 0; accesso < mailConsentite.length; accesso++) {
  var verifica = mailConsentite[accesso]
  console.log(verifica);
}
// stampa un messaggio appropriato
if (verifica = mailUtente ) {
  document.getElementById('mail').innerHTML= "accesso consentito"
} else {
  document.getElementById('mail').innerHTML= "accesso negato"
}
console.log(mail);
