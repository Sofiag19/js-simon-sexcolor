// 2.  Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

// richiesta nome
var nome = prompt("Inserisci il tuo nome");
var nomeColor = document.getElementById('name');
// richiesta sesso
var sesso = prompt("M o F?");
var sessoMinuscolo = sesso.toLowerCase();
if (sessoMinuscolo == "m") {
  nomeColor.style.color = "Blue";
} else if (sessoMinuscolo == "f") {
  nomeColor.style.color = "Pink";
} else {
  alert("Non hai inserito un sesso valido");
}

// output
nomeColor.innerHTML = nome;
