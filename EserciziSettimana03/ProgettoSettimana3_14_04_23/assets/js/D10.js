/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

console.log('- - - - - - - - - ESERCIZIO A - - - - - - - - -');

let sum = 10 + 20;
console.log(sum);

console.log('');

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log('- - - - - - - - - ESERCIZIO B - - - - - - - - -');

let random = (Math.floor(Math.random() * 21)); 
console.log(random);

console.log('');

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log('- - - - - - - - - ESERCIZIO C - - - - - - - - -');

let me = {
  name: 'Manuel',
  surname: 'Centini',
  age: 30
};
console.log(me);

console.log('');

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log('- - - - - - - - - ESERCIZIO D - - - - - - - - -');

delete me.age;
console.log(me);

console.log('');

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log('- - - - - - - - - ESERCIZIO E - - - - - - - - -');

me.skills = ['Javascript'];
console.log(me)

console.log('');

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log('- - - - - - - - - ESERCIZIO F - - - - - - - - -');

me['skills'].push('Java');
console.log(me)

console.log('');

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log('- - - - - - - - - ESERCIZIO G - - - - - - - - -');

me['skills'].pop();
console.log(me)

console.log('');

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('- - - - - - - - - ESERCIZIO 1 - - - - - - - - -');

let dice = () => Math.floor(Math.random()*6 +1);
console.log(dice());

console.log('');

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('- - - - - - - - - ESERCIZIO 2 - - - - - - - - -');

let whoIsBigger = (n1, n2) => {
  return (n1 > n2) ? n1 : n2;
}

console.log(whoIsBigger(5, 10));

console.log('');

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log('- - - - - - - - - ESERCIZIO 3 - - - - - - - - -');

let splitMe = (str) => {
  return str.split(' ');
}

console.log(splitMe('I love Javascript'));

console.log('');

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log('- - - - - - - - - ESERCIZIO 4 - - - - - - - - -');

let deleteOne = (str, bool) => {
  return (bool === true) ? str.slice(1) : str.slice(0, -1);
}

console.log(deleteOne('Javascript', true));
console.log(deleteOne('Javascript', false));

console.log('');

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log('- - - - - - - - - ESERCIZIO 5 - - - - - - - - -');

let onlyLetters = (str) => {
  return str.replace(/\d/g,'');
}

console.log(onlyLetters('I have 4 dogs'));

console.log('');

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log('- - - - - - - - - ESERCIZIO 6 - - - - - - - - -');

let isThisAnEmail = (mail) => {
  const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (mail.toLowerCase().match(mailFormat)) ? true : false;
}

console.log(isThisAnEmail('cavolfiore@gmail.com'));

console.log('');

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('- - - - - - - - - ESERCIZIO 7 - - - - - - - - -');

let whatDayIsIt = () => {
  const giorni = ['Domenica', 'Lunedi', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  return giorni[new Date().getDay()];
}

console.log(whatDayIsIt());

console.log('');

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('- - - - - - - - - ESERCIZIO 8 - - - - - - - - -');

let rollTheDices = (n) => {
  const obj = new Object();
  let acc = 0;
  let arrValue = [];

  for(i = 0; i < n; i++){
    let rand = dice();
    arrValue.push(rand);
    acc += rand;
  }

  obj.sum = acc;
  obj.values = arrValue;

  return obj;
}

console.log(rollTheDices(5))

console.log('');

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('- - - - - - - - - ESERCIZIO 9 - - - - - - - - -');

let howManyDays = (data) => {
  const oggi = new Date();
  return Math.floor((oggi.getTime() - data.getTime())/(1000 * 3600 * 24));
}

console.log(howManyDays(new Date('2023-04-12')));

console.log('');

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log('- - - - - - - - - ESERCIZIO 10 - - - - - - - - -');

let isTodayMyBirthday = (nascita) => {
  let confronto = new Date();
  return (confronto.getMonth() + 1 === nascita.getMonth() + 1 && confronto.getDate() === nascita.getDate());
}

console.log(isTodayMyBirthday(new Date('1993-10-19')));

console.log('');

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log('- - - - - - - - - ESERCIZIO 11 - - - - - - - - -');

let deleteProp = (obj, str) => {
  delete obj[str];
  return obj;
}

console.log(deleteProp({nome: 'Manuel', cognome: 'Centini', sesso: 'M'}, 'sesso'));

console.log('');

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log('- - - - - - - - - ESERCIZIO 12 - - - - - - - - -');

let newestMovie = (arr) => {
  let newestIndex = 0;
  let newestYear = arr[newestIndex].Year;

  arr.forEach((e, i) => {
    if(e.Year > newestYear){
      newestYear = e.Year;
      newestIndex = i;
    }
  })

  return arr[newestIndex]
}

console.log(newestMovie(movies))

console.log('');

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('- - - - - - - - - ESERCIZIO 13 - - - - - - - - -');

let countMovies = (arr) => {
  let c = 0;

  for(e of arr) if(e.Type === 'movie') c++;
  return c;
}

console.log(countMovies(movies))
 
console.log('');

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log('- - - - - - - - - ESERCIZIO 14 - - - - - - - - -');

let onlyTheYears = (arr) => {
  let anniFilm = new Array();

  for(e of arr){
    anniFilm.push(e.Year);
  }

  return anniFilm;
}

console.log(onlyTheYears(movies))

console.log('');

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log('- - - - - - - - - ESERCIZIO 15 - - - - - - - - -');

let onlyInLastMillennium = (arr) => {
  return arr.filter(e => Number(e.Year) <= 2000)
}

console.log(onlyInLastMillennium(movies))

console.log('');

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('- - - - - - - - - ESERCIZIO 16 - - - - - - - - -');

let sumAllTheYears = (arr) => {
  return arr.reduce((acc, v) => acc + Number(v.Year), 0);
}

console.log(sumAllTheYears(movies));

console.log('');

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log('- - - - - - - - - ESERCIZIO 17 - - - - - - - - -');

let searchByTitle = (str) => {
  let arrayFind = new Array();
  for(e of movies){
    if(e.Title.toLowerCase().includes(str.toLowerCase())){
      arrayFind.push(e);
    }
  }
  return arrayFind;
}

console.log(searchByTitle('rings'));

console.log('');

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log('- - - - - - - - - ESERCIZIO 18 - - - - - - - - -');

let searchAndDivide = (str) => {
  const dividedMovies = {match: [], unmatch: []};
  for(e of movies) (e.Title.toLowerCase().includes(str.toLowerCase())) ? dividedMovies.match.push(e) : dividedMovies.unmatch.push(e);
  return dividedMovies;
}

console.log(searchAndDivide('ring'));

console.log('');

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log('- - - - - - - - - ESERCIZIO 19 - - - - - - - - -');

let removeIndex = (rand) => {
  delete movies[rand];
  return movies;
}

console.log(removeIndex(Math.floor(Math.random()*movies.length)));

console.log('');

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log('- - - - - - - - - ESERCIZIO 20 - - - - - - - - -');

function selectContainer(){
  const container = document.getElementById('container');
}

selectContainer();

console.log('');

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log('- - - - - - - - - ESERCIZIO 21 - - - - - - - - -');

function selectTd(){
  const td = document.getElementsByTagName('td');
  console.log(td);
}

selectTd();

console.log('');

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log('- - - - - - - - - ESERCIZIO 22 - - - - - - - - -');

function stampaTd(){
  const td = document.getElementsByTagName('td');
  for(e of td) console.log(e.innerText);
}

stampaTd();

console.log('');

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log('- - - - - - - - - ESERCIZIO 23 - - - - - - - - -');

function changeColor() {
  const a = document.getElementsByTagName('a');
  for(e of a) e.style.backgroundColor = 'red';
}

changeColor();

console.log('');

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log('- - - - - - - - - ESERCIZIO 24 - - - - - - - - -');

function addElement(){
  const lista = document.getElementById('myList');
  const newLi = document.createElement('li')

  lista.appendChild(newLi).innerHTML = 'cinque'
}

addElement();

console.log('');

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log('- - - - - - - - - ESERCIZIO 25 - - - - - - - - -');

function removeList(){
  const lista = document.getElementById('myList');
  const listaLi = document.querySelectorAll('#myList > li');
  for(e of listaLi) lista.removeChild(lista.lastElementChild);
}

removeList();

console.log('');

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log('- - - - - - - - - ESERCIZIO 26 - - - - - - - - -');

function addTest(){
  const tr = document.querySelectorAll('tr')
  for(e of tr) e.className = 'test';
}

addTest();

console.log('');

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log('- - - - - - - - - ESERCIZIO EXTRA 27 - - - - - - - - -');

function halfTree(n){
  let asterischi = '';
  for(i = 0; i < n; i++){
    asterischi += '*';
    console.log(asterischi);
  }
}

// inserisco +2 al fine di non far vedere in output il caso con un asterisco solo
halfTree(Math.floor(Math.random()*10 + 2));

console.log('');

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log('- - - - - - - - - ESERCIZIO EXTRA 28 - - - - - - - - -');

function tree(n){
  const spazi = ' ';
  let asterischi = '';

  asterischi = `${spazi.repeat(n - 1)}*`;
  for(i = 0; i < n; i++){
    console.log(asterischi);
    asterischi = asterischi.slice(1);
    asterischi += '**';
  }
}

// inserisco +2 al fine di non far vedere in output il caso con un asterisco solo
tree(Math.floor(Math.random()*10 + 2));
console.log('');

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log('- - - - - - - - - ESERCIZIO EXTRA 29 - - - - - - - - -');

let isItPrime = (n) => {
  let isPrime = true;
  if(n === 0){
    return 'Il numero è 0';
  }else if(n === 1){
    return 'Il numero è 1'
  }else if(n > 1){
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
          isPrime = false;
          break;
      }
    }
    console.log(n)
    return isPrime;
  }
}

console.log(isItPrime(Math.floor(Math.random()*21)))
/* Questo array viene usato per gli esercizi. Non modificarlo. */