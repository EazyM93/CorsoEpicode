// ---------------------- DOM ELEMENTS ----------------------

const difficult = document.getElementById('selectDifficult'); // difficoltà selezionata
const btnProceed = document.getElementById('proceedButton'); // bottone per procedere
const terms = document.getElementById('terms'); // check dei termini per procedere

// ---------------------- SBLOCCO BOTTONE PROCEED ----------------------

btnProceed.disabled = true; // bottone diabilitato

// controlla selezione difficoltà
difficult.addEventListener('change', () => (terms.checked === true && difficult.value !== '') ? btnProceed.disabled = false : btnProceed.disabled = true);

// controlla checkbox e sblocco / blocco bottone
terms.addEventListener('change', () => (terms.checked === true && difficult.value !== '') ? btnProceed.disabled = false : btnProceed.disabled = true);

// ---------------------- EVENTO CLICK PROCEED ----------------------

// immagazzina la difficoltà selezionata
btnProceed.addEventListener('click', () => localStorage.setItem('diff', difficult.value ));