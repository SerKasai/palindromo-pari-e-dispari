// Esercizio palindromo

const parola = prompt('Inserisci una parola').trim();
console.log(parola);

let reversed = parola.split('').reverse().join('');
console.log(reversed);

function palindromo(parola1, parola2) {
  let verifica = true;
  if (parola != reversed) {
    verifica = false;
    console.log('La parola non è palindroma');
  } else {
    console.log('La parola è palindroma');
  }
  return verifica;
}

const risultato = palindromo(`${parola}, ${reversed}`);
console.log(risultato);


// Esercizio pari e dispari

const scelta = prompt('Scegli tra pari o dispari');
console.log(scelta)
const userNum = parseInt(prompt('Inserisci un numero'));
console.log(userNum);

function randomBotNum(max) {
  return Math.floor(Math.random() * max);
}

console.log(randomBotNum(6));