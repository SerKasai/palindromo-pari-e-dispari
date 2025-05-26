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

const scelta = prompt('Scegli tra pari o dispari').trim();
console.log(scelta)
const userNum = parseInt(prompt('Inserisci un numero da 0 a 5'));
console.log(`Il numero scelto da te è ${userNum}`);

function randomBotNum(max) {
  return Math.floor(Math.random() * max);
}
const botNum = randomBotNum(6)
console.log(`Il bot sceglie ${botNum}`);

const somma = (userNum + botNum)
console.log(`La somma dei due numeri è ${somma}`)

function pariOdispari() {
  let pari = true
  if (somma % 2 !== 0) {
    pari = false
    console.log('Il numero è dispari')
  } else {
    console.log('Il numero è pari')
  }
  return pari

}

let ver = pariOdispari(somma)
console.log(ver)

if ((scelta === 'pari') && (ver = true)) {
  console.log('Hai scelto pari e hai vinto!')
} else if ((scelta === 'dispari') && (ver = false)) {
  console.log('Hai scelto dispari e hai vinto!')
} else {
  console.log('Hai perso')
}