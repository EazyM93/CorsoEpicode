/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const primo = pets.splice(0, 1)
pets.push(primo[0])
console.log(pets)


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = `HB 20${i} ZH`
}

console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({ brand: 'Fiat', model: 'Panda', color: 'white', trims: ['poor', 'big'], licensePlate: 'HB 210 ZH' })

for (let t of cars) {
  t.trims.pop()
}

console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let t of cars) {
  justTrims.push(t.trims[0])
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let t of cars) {
  if (t.color.charAt(0) === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let c = 0

while (numericArray[c] !== 32) {
  console.log(numericArray[c])
  c++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]
const pippo = new Array()

for (let num of charactersArray) {
  switch (num) {
    case 'a':
      pippo.push(1)
      break;
    case 'b':
      pippo.push(2)
      break;
    case 'c':
      pippo.push(3)
      break;
    case 'd':
      pippo.push(4)
      break;
    case 'e':
      pippo.push(5)
      break;
    case 'f':
      pippo.push(6)
      break;
    case 'g':
      pippo.push(7)
      break;
    case 'h':
      pippo.push(8)
      break;
    case 'i':
      pippo.push(9)
      break;
    case 'l':
      pippo.push(10)
      break;
    case 'm':
      pippo.push(11)
      break;
    case 'n':
      pippo.push(12)
      break;
    case 'o':
      pippo.push(13)
      break;
    case 'p':
      pippo.push(14)
      break;
    case 'q':
      pippo.push(15)
      break;
    case 'r':
      pippo.push(16)
      break;
    case 's':
      pippo.push(17)
      break;
    case 't':
      pippo.push(18)
      break;
    case 'u':
      pippo.push(19)
      break;
    case 'v':
      pippo.push(20)
      break;
    case 'z':
      pippo.push(21)
      break;
    default:
      console.log('Qualcosa è andato storto!')
  }
}

console.log(pippo)