/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO 1 - - - - - - - - -');

let area = (l1, l2) => l1 * l2;

console.log(area(10, 15));
console.log('');

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


console.log('- - - - - - - - - ESERCIZIO 2 - - - - - - - - -');

let crazySum = (int1, int2) => (int1 === int2) ? (int1 + int2) * 3 : int1 + int2;

console.log(crazySum(20, 20));
console.log(crazySum(20, 30));
console.log('');

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO 3 - - - - - - - - -');

let crazyDiff = (num) => (num > 19) ? (Math.abs(num - 19)) * 3 : Math.abs(num - 19);

console.log(crazyDiff(20));
console.log(crazyDiff(18));
console.log('');

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO 4 - - - - - - - - -');

// invece di usare tutti i console log di seguito, metto i numeri in un array da ciclare 
// console.log(boundary(20))
// console.log(boundary(30))
// console.log(boundary(100))
// console.log(boundary(101))
// console.log(boundary(400))

const numeriVerifica = [20, 30, 100, 101, 400];

let boundary = (n) => (n > 20 && n <= 100) || n === 400;

for (i = 0; i < numeriVerifica.length; i++){
    console.log(boundary(numeriVerifica[i]));
}

console.log('');

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO 5 - - - - - - - - -');

let epify = (s) => s.startsWith('EPICODE') ? s : 'EPICODE ' + s;

console.log(epify('SCHOOL'));
console.log(epify('EPICODE TEAM'));

console.log('');


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('- - - - - - - - - ESERCIZIO 6 - - - - - - - - -');

const numeriVerifica1 = [12, 14, 2, -12];

let check3and7 = (nPositvo) => {
    if(nPositvo < 0) return 'Il numero non è positivo';
    return (nPositvo % 3) === 0 || (nPositvo % 7 === 0);
}

for (i = 0; i < numeriVerifica1.length; i++){
    console.log(check3and7(numeriVerifica1[i]));
}

console.log('');


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO 7 - - - - - - - - -');

let reverseString = (s) => s.split('').reverse().join('');

console.log(reverseString('EPICODE'));

console.log('');

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO 8 - - - - - - - - -');

let upperFirst = (frase) => {
    frase = frase.split(' ');
    for(i = 0; i < frase.length; i++) frase[i] = (frase[i].charAt(0).toUpperCase() + frase[i].slice(1));
    return frase.join(' ');
}

console.log(upperFirst('ciao sono manuel centini'));

console.log('');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO 9 - - - - - - - - -');

let cutString = (parola) => {
    return parola.slice(1, -1);
}

console.log(cutString('Manuel'));

console.log('');

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO 10 - - - - - - - - -');
const numeriCasuali = [];

let giveMeRandom = (n) => {
    for(i = 0; i < n; i++){
        numeriCasuali.push(Math.floor(Math.random() * 11));
    }
    return numeriCasuali;
}

console.log(giveMeRandom(5));

console.log('');
// Esercizi Extra ----------------------------------------------------------------------------------------------------------------------------------------------------

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO EXTRA 1 - - - - - - - - -');

let checkArray = (arr) => {
    let sum = 0;
    for(num of arr){
        (num > 5) ? (console.log(`${num} è maggiore di 5`), sum += num)  : console.log(`${num} non è maggiore di 5`);
    }
    return `La somma dei numeri maggiori di 5 è : ${sum}`
}

console.log(checkArray(numeriCasuali));

console.log('');
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO EXTRA 2 - - - - - - - - -');

const shoppingCart = [
    {
        price: 599,
        name: 'Mac Mini M2' , 
        id: 001,
        quantity: 1
    },
    {
        price: 20,
        name: 'Cover iPhone 13' , 
        id: 002,
        quantity: 2
    },
    {
        price: 10,
        name: 'Pellicola Protettiva Vetro Temprato' , 
        id: 003,
        quantity: 5
    },
    {
        price: 189,
        name: 'AirPods 3°Gen' , 
        id: 004,
        quantity: 1
    }
]

let shoppingCartTotal = (cart) => {
    let total = 0;
    for(ogg of cart) total += (ogg['price'] * ogg['quantity']);
    return `Il totale dovuto è : ${total}`;
}

console.log(shoppingCartTotal(shoppingCart));

console.log('');

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('- - - - - - - - - ESERCIZIO EXTRA 3 - - - - - - - - -');

let addToShoppingCart = (newObj) => {
    shoppingCart.push(newObj);
    return shoppingCart.length;
}

console.log(`Numero elementi aggiornato : ${addToShoppingCart({price: 150, name: 'Apple Keyboard' , id: 005, quantity: 4})}`);

console.log('');
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO EXTRA 4 - - - - - - - - -');

let maxShoppingCart = (arrObj) => {
    let maxPrice = 0;
    let maxPriceIndex = 0;
    for(i = 0; i < arrObj.length; i++) if(arrObj[i].price > maxPrice) {maxPrice = arrObj[i].price, maxPriceIndex = i};
    return shoppingCart[maxPriceIndex];
}

console.log(maxShoppingCart(shoppingCart));

console.log('');

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO EXTRA 5 - - - - - - - - -');

let latestShoppingCart = (arrObj) => {
    return arrObj[arrObj.length - 1];
}

console.log(latestShoppingCart(shoppingCart));

console.log('');

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO EXTRA 6 - - - - - - - - -');

function loopUntil(x){
    let i = 0;
    let randomNumber = 0; 

    while(i < 3){
        randomNumber = Math.floor(Math.random() * 10);
        console.log(randomNumber);
        if(randomNumber > x) i++
    };
}

loopUntil(5)

console.log('');

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO EXTRA 7 - - - - - - - - -');

const variElementi = [5, 5, 10, '29', 30, true, 50]

let average = (arr) => {
    let filteredArr = [];
    for(x of arr) if(typeof(x) === 'number') filteredArr.push(x);
    return filteredArr.reduce((acc, curr) => acc + curr) / filteredArr.length;
}

console.log(average(variElementi))

console.log('');

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO EXTRA 8 - - - - - - - - -');

const arrayStringhe = ['ciao', 'sono', 'manuel', 'centini']

let longest = (arr) => {
    let longest = '';
    for(x of arr) if(x.length > longest.length) longest = x;
    return longest;
}

console.log(longest(arrayStringhe));

console.log('');

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO EXTRA 9 - - - - - - - - -');

let emailContent = 'Questa mail è uno SPAM'

let checkMail = (stringa) => {
    let arrStringa = stringa.split(' ');
    let check = true;
    for(x of arrStringa) if(x === 'SPAM' || x === 'SCAM') check = false;
    return check;
}

console.log(checkMail(emailContent))

console.log('');

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO EXTRA 10 - - - - - - - - -');

let giorniPassati = (dataPassata) => {
    return Math.ceil(((new Date().getTime())-dataPassata.getTime()) / ((1000*60*60*24)))
}

console.log(giorniPassati(new Date('2023-04-01')))

console.log('');

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('- - - - - - - - - ESERCIZIO EXTRA 11 - - - - - - - - -');

function matrixGenerator(x, y) {
    let arrayMomentaneo = []

    for(i = 0; i <= x; i++) {
        for(j = 0; j <= y; j++) {
            arrayMomentaneo.push(`${i}${j}`)
        }
        console.log(arrayMomentaneo)
        arrayMomentaneo = []
    }
}

matrixGenerator(5, 5)

console.log('');