// ---------------------- DOM ELEMENTS ----------------------
const canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
const correctDom = document.getElementById('correct');
const wrongDom = document.getElementById('wrong');
const numberCorrect = document.getElementById('numberCorrect');
const numberWrong = document.getElementById('numberWrong');
const totalQuestions = document.querySelectorAll('.totalQuestions');

// ---------------------- PASSAGGIO RISULTATO ----------------------
const risultatoQuiz = localStorage.getItem('punteggioFinale');
const diff = localStorage.getItem('diff')

// ---------------------- GRAFICO RISULTATI ----------------------

// percentuale risposte
let percentCorrect = 0;
let percentIncorrect = 0;

function percentageSet() {
    // variabile che immagazzina momentaneamente il numero di domande totali in base alla difficoltà
    let tempDiff = 0;

    // check difficoltà per assegnazione
    if (diff === 'easy') {
        tempDiff = 7;
    } else {
        tempDiff = 10;
    }

    // assegnazione DOM delle domande totali
    totalQuestions.forEach((e) => e.innerHTML = tempDiff);

    // assegnazione DOM domande giuste/sbagliate su domande totali
    percentCorrect = (risultatoQuiz * 100) / 7;
    percentIncorrect = ((7 - risultatoQuiz) * 100) / 7;

    
    correctDom.innerHTML = percentCorrect;
    wrongDom.innerHTML = percentIncorrect;

    numberCorrect.innerHTML = risultatoQuiz;
    numberWrong.innerHTML = 7 - risultatoQuiz;
}

function buildingGrap() {
    // costruzione cerchio
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = 150;
    let strokeColorIncorrect = "#C2128D";
    let strokeColorCorrect = "#00FFFF";

    // riempimento barra
    let degreesCorrect = (percentCorrect / 100) * 360;
    let degreesIncorrect = (percentIncorrect / 100) * 360;

    // riempimento
    context.beginPath();
    context.arc(
        centerX,
        centerY,
        radius,
        ((90 + degreesCorrect) * Math.PI) / 180,
        ((-90 - degreesIncorrect) * Math.PI) / 180,
        true
    );

    // bordi risposte giuste
    context.lineWidth = 50;
    context.strokeStyle = strokeColorIncorrect;
    context.stroke();

    // riempimento 
    context.beginPath();
    context.arc(
        centerX,
        centerY,
        radius,
        (-(90 + degreesCorrect) * Math.PI) / 180,
        (-90 * Math.PI) / 180,
        false
    );

    // bordi risposte giuste
    context.lineWidth = 50;
    context.strokeStyle = strokeColorCorrect;
    context.stroke();
}



//onload
window.onload = () => {
    percentageSet();
    buildingGrap();
}