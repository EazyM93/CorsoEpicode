// ---------------------- DOM ELEMENTS ----------------------

const difficult = document.getElementById('selectDifficult'); // difficoltà selezionata
const btnProceed = document.getElementById('proceedButton'); // bottone per procedere
const terms = document.getElementById('terms'); // check dei termini per procedere

// ---------------------- SBLOCCO BOTTONE PROCEED ----------------------

btnProceed.disabled = true; // bottone diabilitato

// controlla selezione difficoltà
difficult.addEventListener('change', () => (terms.checked === true && difficult.value !== '') ? unlock() : lock());

// eventListner sblocco / blocco bottone
terms.addEventListener('change', () => (terms.checked === true && difficult.value !== '') ? unlock() : lock());

// sblocco / blocco bottone
function unlock(){
    btnProceed.disabled = false;
    btnProceed.classList.add('blueButton');
    btnProceed.classList.remove('offProceed');
}

function lock(){
    btnProceed.disabled = true;
    btnProceed.classList.add('offProceed');
    btnProceed.classList.remove('blueButton');
}


// ---------------------- EVENTO CLICK PROCEED ----------------------

// immagazzina la difficoltà selezionata
btnProceed.addEventListener('click', () => localStorage.setItem('diff', difficult.value ));