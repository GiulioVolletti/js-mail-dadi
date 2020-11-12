console.log("Hello World!");
// Chiedi all’utente la sua email,
var mailUtente = prompt("inserire qui la tua mail")
console.log(mailUtente);

// mail di accesso utenti
var mailConsentite = ["pincopallo@smail.com" , "pdorfigliodikmer@gmail.com" , "anonimo@hotmail.it" , "boh@gmail.com" ,"prova@gmail.com" ]
console.log(mailConsentite);
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato
document.getElementById('mail').innerHTML= "accesso negato"

for (var accesso = 0; accesso < mailConsentite.length; accesso++) {
  // stampa un messaggio appropriato
  if (mailUtente === mailConsentite[accesso] ) {
    document.getElementById('mail').innerHTML= "accesso consentito"
    console.log(mailConsentite[accesso]);
  }
}
console.log(accesso);
// console.log(verifica);
console.log(mail);
