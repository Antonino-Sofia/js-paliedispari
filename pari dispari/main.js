console.log('pari e dispari');

//Pari e Dispari
//1-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//2-Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//3-Sommiamo i due numeri
//4-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//5-Dichiariamo chi ha vinto.

//chiedo all'utente pari o dispari e faccio una variabile
const userChoice = prompt("Scegli tra pari e dispari");
console.log({ userChoice });

if (userChoice === "pari" || userChoice === "dispari");

//chiedo il numero da scegliere e faccio una variabile
const userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5"));

if (userNumber >= 1 && userNumber <= 5);
console.log({ userNumber });

// genero il numero

const cpuNumber = getRndInterger(1, 5);
console.log({ cpuNumber });

const sum = userNumber + cpuNumber;
console.log({ sum });

const result = isEvenOrOdd(sum);
console.log({ result });

if (userChiose === result);
console.log('vince utente');

 else {
    console.log('vince computer');
  }

 else {
  console.log('il numero deve essere compreso tra 1 e 5');
  alert('il numero deve essere compreso tra 1 e 5');
}

 else {
console.log(`Hai scelto ${userChoice}, ma il valore deve essere pari o dispari`);
alert(`Hai scelto ${userChoice}, ma il valore deve essere pari o dispari`);
}


// Funzioni
 // restituisce True o False

 function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return 'pari';
  } else {
    return 'dispari';
  }
}

//genera un numero random tra min e max sempre inclusi
function getRndInteger(min, max) {
  //interrompe il codice della funzione e restituisce un valore;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



