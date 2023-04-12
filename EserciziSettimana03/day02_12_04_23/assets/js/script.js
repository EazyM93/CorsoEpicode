/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log('- - - - - - - - - ESERCIZIO 1 - - - - - - - - -');

let mixStringhe = (str1, str2) => {
    return (str1.slice(0, 2) + str2.slice(-3)).toUpperCase();
}
console.log(mixStringhe('Prima', 'Seconda'));

console.log('');

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso). EXTRA Evitare i valori ripetuti
*/

  console.log('- - - - - - - - - ESERCIZIO 2 - - - - - - - - -');

  let randomArray = () => {
      let dieciElementi = [];
      let j = 0;
      let casuale;
      
      while(j < 10){
        casuale = Math.floor(Math.random() * (100 + 1))
        if(dieciElementi.includes(casuale) === false){
          dieciElementi.push(casuale);
          j++;
        } 
      }
      
      return dieciElementi;
  }
  
  console.log(randomArray());
  
  console.log('');

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.(suggerimento: il metodo filter può aiutare)
*/

  console.log('- - - - - - - - - ESERCIZIO 3 - - - - - - - - -');
  
  let arrayFiltrato = (arr) => {return arr.filter((num) => (num % 2) === 0);}
  
  console.log(arrayFiltrato(randomArray()))

  console.log('');

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array.
*/

console.log('- - - - - - - - - ESERCIZIO 4 - - - - - - - - -');

let sum = 0;
randomArray().forEach((num) => sum += num);
console.log(sum);

console.log('');

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

console.log('- - - - - - - - - ESERCIZIO 5 - - - - - - - - -');

let sum1 = randomArray().reduce((acc, valoreCorrente) => acc + valoreCorrente);
console.log(sum1);

console.log('');

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

console.log('- - - - - - - - - ESERCIZIO 6 - - - - - - - - -');

function nuovoArray (arr, n) {
  let nuovo = [];
  arr.forEach((e) => nuovo.push(e + n));
  return nuovo;
}

console.log(nuovoArray(randomArray(), 5));

console.log('');

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log('- - - - - - - - - ESERCIZIO 8 - - - - - - - - -');

const stringheArray = ['Ciao', 'sono', 'Manuel', 'Centini'];

const newArray1 = [];

stringheArray.forEach((elemento) => newArray1.push(elemento.length));

console.log(newArray1);

console.log('');

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log('- - - - - - - - - ESERCIZIO 9 - - - - - - - - -');

let arreyValori = () => {
    const arrayDispari = [];

    for(i = 1; i < 100 ; i++) if((i % 2) !== 0) arrayDispari.push(i);

    return arrayDispari;
}

console.log(arreyValori());

console.log('');

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log('- - - - - - - - - ESERCIZIO 10 - - - - - - - - -');

let oldest = (arr) => {
  let oldestMovie = movies[0].Title;
  let oldestYear = Number(movies[0].Year);

  for(i = 1; i < movies.length; i++){
    if(Number(movies[i].Year) < oldestYear) {
      oldestMovie = movies[i].Title;
      oldestYear = Number(movies[i].Year);
    }
  }
  return oldestMovie;
}

console.log(`Il film più vecchio è : ${oldest(movies)}`)
console.log('');

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log('- - - - - - - - - ESERCIZIO 11 - - - - - - - - -');

let nMovie = (arr) => {
  let c = 0;
  arr.forEach((e) => {if(e.Type.toLowerCase() === 'movie') c++})
  return c;
}

console.log(`Numero film : ${nMovie(movies)}`)

console.log('');

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log('- - - - - - - - - ESERCIZIO 12 - - - - - - - - -');

let nomiFilm = [];

function filtraNomi (arr){
  arr.forEach((e) => nomiFilm.push(e.Title));
  return nomiFilm;
}

console.log(filtraNomi(movies))

console.log('');

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log('- - - - - - - - - ESERCIZIO 13 - - - - - - - - -');

function filmMillennio (arr){
  return arr.filter(e => Number(e.Year) >= 2000)
}

console.log(filmMillennio(movies))
console.log('');

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

console.log('- - - - - - - - - ESERCIZIO 14 - - - - - - - - -');

let ricercaIMBID = (imdbIDsearch) => {
  return movies.find((e) => e.imdbID === imdbIDsearch)
}

console.log(ricercaIMBID(movies[Math.floor(Math.random() * (movies.length - 1))].imdbID))

console.log('');

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log('- - - - - - - - - ESERCIZIO 15 - - - - - - - - -');

let somma = (arr) => {return arr.reduce((acc, current) => acc += Number(current.Year), 0)}

console.log(somma(movies))

console.log('')

/* ESERCIZO 16 EXTRA DEL PROF
  Pagina html scelta dei film
 */ 
  let button = document.getElementById("bottone_scheda")
  let selezione = document.getElementById("film")
  let info_film = document.getElementById("info_film")

for(i = 0; i < movies.length; i++){
  selezione.innerHTML += `<option value="${movies[i].imdbID}">${movies[i].Title}</option>`
}

button.addEventListener('click', function (){
  let film = movies.find((e) => e.imdbID === selezione.value);
  info_film.innerHTML = `<h1 id="nome_film">${film.Title}</h1><h2 id="anno">${film.Year}</h2><img id="locandina" src="${film.Poster}" alt=""></img>`;
});