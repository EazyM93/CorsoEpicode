// PERCENT. RISPOSTE
var percentCorrect = 50;
var percentIncorrect = 50;

// CANVAS HTML
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// DIMENSIONI CERCHIO
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 150;

// RIEMPIMENTO BARRA CERCHIO
var degreesCorrect = (percentCorrect / 100) * 360;
var degreesIncorrect = (percentIncorrect / 100) * 360;
//COLORI RISPOSTE
var strokeColorIncorrect = "#C2128D";
var strokeColorCorrect = "#00FFFF";

//RIEMPIMENTO BORDI IN BASE ALLE DOMANDE GIUSTE/SBAGLIATE
context.beginPath();
context.arc(
  centerX,
  centerY,
  radius,
  ((90 + degreesCorrect) * Math.PI) / 180,
  ((-90 - degreesIncorrect) * Math.PI) / 180,
  true
);

// BORDI RISPOSTE GIUSTE
context.lineWidth = 50;
context.strokeStyle = strokeColorIncorrect;
context.stroke();

//RIEMPIMENTO BORDI IN BASE ALLE DOMANDE GIUSTE/SBAGLIATE
context.beginPath();
context.arc(
  centerX,
  centerY,
  radius,
  (-(90 + degreesCorrect) * Math.PI) / 180,
  (-90 * Math.PI) / 180,
  false
);

// BORDI RISPOSTE SBAGLIATE
context.lineWidth = 50;
context.strokeStyle = strokeColorCorrect;
context.stroke();