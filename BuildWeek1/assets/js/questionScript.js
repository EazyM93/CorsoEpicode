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

// DOM Elements
const questionNumber = document.getElementById('number');
const question = document.getElementById('question');
const answers = document.getElementById('answers');
const btnAnswer = document.getElementsByClassName('.')

// Variable
let punteggio = 0; //tiene il conto delle risposte corrette
let actualQuestion = 1; //tiene il conto delle domande effettuate
let pickQuestion = 0;
let arrayRand; //variabile che accoglie l'array randomizzato da randomizeArray

//Quiz difficult
const diff = localStorage.getItem('diff'); // value scelta nella prima pagina
let questionLength; //contiene la quantità di domande alla difficoltà

//Verifica la sceltà della difficoltà
function actualDifficult(){
    questionLength = (diff === 'easy') ? 7 : 10;
    document.getElementById('questionLength').innerHTML = questionLength;
} 

// Randomizzatore di array
function randomizeArray(arr){
    for (let i = arr.length - 1; i > 0; i--) { 
        let j = Math.floor(Math.random() * (i + 1));
  
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// StartQuiz
function startQuiz(){
    // controllo difficoltà e impostazione array in base ad essa
    if(diff === 'easy'){
        arrayRand = randomizeArray(questions.slice(3));
    }else{
        arrayRand = randomizeArray(questions);
    }
    quiz();
}

function quiz(){
  showQuestion();

}

//Show question
function showQuestion(){

    // reset della domande
    resetAnswer();

    // seleziona l'oggetto domanda
    question.innerHTML = arrayRand[pickQuestion].question; 

    // Creazione array risposte da randomizzare
    let randAnswer = arrayRand[pickQuestion].incorrect_answers; // assegna le risposte sbagliate
    randAnswer.push(arrayRand[pickQuestion].correct_answer); // push di quella corretta
    randAnswer = randomizeArray(randAnswer); // randomizzazione risposte

    // domande mostrate a schermo
    for(e of randAnswer){
      const button = document.createElement('button');
      button.innerHTML = e;
      button.classList.add('btnAnswer');
      answers.appendChild(button);
    }
}

// reset delle domande
function resetAnswer(){
  while(answers.firstChild){
    answers.removeChild(answers.firstChild)
  }
}

// Question progress on html page
questionNumber.innerHTML = actualQuestion;

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