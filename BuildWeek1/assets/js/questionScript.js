// ---------------------- ARRAY QUESTION ----------------------
const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "hard",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

// ---------------------- DOM ELEMENTS ----------------------
const questionNumber = document.getElementById('number');
const question = document.getElementById('question');
const answers = document.getElementById('answers');
const textNext = document.getElementById('nextButton');
const btnNext = document.getElementById('nextButtonBox');


// ---------------------- VARIABILI ----------------------
let punteggio = 0; //tiene il conto delle risposte corrette
let actualQuestion = 1; //tiene il conto delle domande effettuate
let pickQuestion = 0; //indice delle domande
let arrayRand; //variabile che accoglie l'array domande randomizzato da randomizeArray
let submitAnswer; //contiene di volta in volta la risposta inserita dall'utente


// ---------------------- PROGRESSO DOMANDE NEL DOM ----------------------
questionNumber.innerHTML = actualQuestion;


// ---------------------- SET QUIZ DIFFICULT ----------------------
const diff = localStorage.getItem('diff'); // value scelta nella prima pagina
let questionLength; //contiene la quantità di domande alla difficoltà

function actualDifficult(){

  //verifica e ritorna il numero di domande in base alla difficoltà
  questionLength = (diff === 'easy') ? 7 : 10;
  
  //restituisce sul DOM la lunghezza del quiz
  document.getElementById('questionLength').innerHTML = questionLength; 
} 


// ---------------------- ARRAY RANDOMIZER ----------------------
function randomizeArray(arr){

  // mischia i valori interni dell'array
  for (let i = arr.length - 1; i > 0; i--) { 
    let j = Math.floor(Math.random() * (i + 1)); //indice casuale
    let temp = arr[i]; //variabile temporanea
    arr[i] = arr[j];
     arr[j] = temp;
  }

  return arr; //ritorna array randomizzato
}


// ---------------------- INIZZIALIZZATORE QUIZ ----------------------
function startQuiz(){

  // controllo difficoltà e crea array randomizzato escludendo/includendo le domande difficili
  if(diff === 'easy'){
    arrayRand = randomizeArray(questions.slice(3));
  }else{
    arrayRand = randomizeArray(questions);
  }

    showQuestion(); //inizzializza la prima domanda
  }


// ---------------------- MOSTRA DOMANDA ----------------------
function showQuestion(){

  // reset delle domande
  resetAnswer();

  // seleziona l'oggetto domanda
  question.innerHTML = arrayRand[pickQuestion].question; 

  // creazione array risposte randomizzate
  let randAnswer = arrayRand[pickQuestion].incorrect_answers; // assegna le risposte sbagliate
  
  randAnswer.push(arrayRand[pickQuestion].correct_answer); // push di quella corretta
  
  randAnswer = randomizeArray(randAnswer); // randomizzazione risposte
 
  // mostra domande a schermo, aggiungendo la struttura HTML
  for(e of randAnswer){
    const button = document.createElement('button');
    button.innerHTML = e;
    button.classList.add('btnAnswer'); //assegna una classe per getire la selezione utente
    answers.appendChild(button);
  }
    
  // quando selezioniamo una risposta la assegnamo a una variabile, può essere cambiata prima di fare il submit
  document.querySelectorAll('.btnAnswer').forEach(e => {
    e.addEventListener('click', () => submitAnswer = e.innerText)
  })
}


// ---------------------- DOMANDA SUCCESSIVA E PASSAGIO AI RISULTATI ----------------------
btnNext.addEventListener('click', () => {

  //controlla se la risposta è esatta
  if(submitAnswer === arrayRand[pickQuestion].correct_answer){
    punteggio++; //incremento punteggio
    console.log(punteggio)
  }

  //avanzamento con controllo dell'andamento del quiz
  //se il quiz è finito va alla pagina successiva
  if(actualQuestion < questionLength){
    actualQuestion++;
    pickQuestion++;
    //il bottone cambierà dicitura all'ultima domanda
    if(actualQuestion === questionLength) textNext.innerText = 'END QUIZ';
    questionNumber.innerHTML = actualQuestion; //avanzamento visivo sul DOM
    showQuestion();   
  }else{
    localStorage.setItem('punteggioFinale', punteggio); //creazione della local storage del punteggio finale
    window.location.href = 'result.html'; //passaggio alla schermata del risultato
  }
});

// ---------------------- RESET SPAZIO DOMANDE ----------------------
function resetAnswer(){

  //rimuove i figli del box domnande finchè esistono
  while(answers.firstChild){ 
    answers.removeChild(answers.firstChild);
  }

  //resetta la riposta inserita dall'utente
  submitAnswer = '';
}


// ---------------------- TIMER ----------------------
//Timer BOZZA
// TIMER SETTINGS
// const boxTimer = document.getElementById('timer');
// const visualCount = document.getElementById('countdown');
// const btnTimer = document.getElementById('attivaTimer');

// const tenSeconds = 5;

// // SET TIMER
// visualCount.innerHTML = tenSeconds;

// // START TIMER
// btnTimer.onclick = () => {
//     setInterval(startTimer, 1000);
// }

// function startTimer(){
//     visualCount.innerHTML = visualCount.innerHTML - 1;
//     if(visualCount.innerHTML < 0) visualCount.innerHTML = 0;
// }

// Onload
window.onload = () => {
    actualDifficult();
    startQuiz();
}