console.log("Palindromo");

//1-Chiedere all’utente di inserire una parola
//2-Creare una funzione per capire se la parola inserita è palindroma
// Esempio= "Anna"
// anna => inverso (anna) => palindromo

const userWord = "Melo";
console.log("userWord");
const isWordPalindrome = isPalindrome(userWord);

if (isWordPalindrome) {
  console.log("sono una parola palindroma");
} else {
  console.log("NON sono una parola palindroma");
}

// Eseguo un reverse della parola, se è uguale a quella iniziale è palindroma

function isPalindrome(input) {
  const word = input.toLowerCase();

  let start = 0;
  let end = word.length - 1;

  while (0 < end) {
    if (word[start] !== word[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}
