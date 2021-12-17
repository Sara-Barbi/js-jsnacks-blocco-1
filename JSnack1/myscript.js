let myArr = [];
let somma = 0;

do {
    let myPrompt =parseInt(prompt("inserisci un numero inferiore a 50"));
    myArr.push(myPrompt);
    somma += myPrompt;
} while (somma<50);

console.log(myArr);
console.log(somma);








