// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

// alert con 5 numeri casuali
var numeri = [];
for (var i = 0; i < 5; i++) {
  numeri.push(Math.floor((Math.random()*100)+1));
}
alert(numeri);

// timer 30 secondi
var punteggio = [];
setTimeout(function () {
  var i = 0;
  while (i < 5) {
    var numUtente = parseInt(prompt("Inserisci il numero che ti ricordi"));
    if (numeri.includes(numUtente) == true) {
      punteggio.push(numUtente);
    }
    i++;
  }
  if (punteggio.length == 0) {
    console.log("Sei proprio una schiappa, non hai indovinato nessun numero...Pa-pa-paaaaa");
  } else if (punteggio.length == 1) {
    console.log("Il tuo punteggio è " + punteggio.length + ". Hai indovinato solo questo numero " + punteggio + "!");
  } else {
    console.log("Il tuo punteggio è " + punteggio.length + ". Hai indovinato questi numeri " + punteggio + "!");
  }
}, 30000);
