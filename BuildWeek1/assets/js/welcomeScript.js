// Elementi del DOM - - - - - - - - - - - - - - - - - - - - - - - -
const difficult = document.getElementById('selectDifficult'); //difficoltà selezionata
const btnProceed = document.getElementById('proceedButton'); //bottone per procedere

// Prressione bottone per procedere
btnProceed.addEventListener('click', () => {
    localStorage.setItem('diff', difficult.value);
});