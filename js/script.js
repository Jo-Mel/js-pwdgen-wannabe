var nome = prompt('Inserisci nome');
var cognome = prompt('Inserisci cognome');
var colore = prompt('Qual è il tuo clore preferito?');
var randomNr = 19;
var calcolapwd = nome + cognome + colore + randomNr;
document.getElementById('pwdgen').innerHTML = 'La tua password è ' + calcolapwd