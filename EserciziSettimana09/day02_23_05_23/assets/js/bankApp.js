"use strict";
// Clienti
class FiglioAccount {
    constructor(nome, cognome) {
        this.balanceInit = 0;
        this.nomeCliente = nome;
        this.cognomeCliente = cognome;
    }
    displaySaldo() {
        return this.balanceInit;
    }
    depositMet(versamento) {
        return this.balanceInit += versamento;
    }
    withDrawMet(prelievo) {
        return this.balanceInit -= prelievo;
    }
}
class MadreAccount extends FiglioAccount {
    constructor(nome, cognome) {
        super(nome, cognome);
    }
    depositMet(versamento) {
        return this.balanceInit += (versamento + (versamento * 0.1));
    }
}
const figlio = new FiglioAccount('Manuel', 'Centini');
const madre = new MadreAccount('Dua', 'Lipa');
// elementi dom figlio
const sonDeposit = document.getElementById('sonDeposit');
const sd = document.getElementById('sd');
const sonWithDraw = document.getElementById('sonWithDraw');
const swd = document.getElementById('swd');
const viewSonSaldo = document.getElementById('viewSonSaldo');
// deposito figlio
sonDeposit.addEventListener('submit', e => {
    e.preventDefault();
    intervallo(figlio.depositMet(Number(sd.value)), viewSonSaldo, 'deposito');
    sonDeposit.reset();
});
// prelievo figlio
sonWithDraw.addEventListener('submit', e => {
    e.preventDefault();
    intervallo(figlio.withDrawMet(Number(swd.value)), viewSonSaldo, 'prelievo ');
    sonWithDraw.reset();
});
// elementi dom madre
const motherDeposit = document.getElementById('motherDeposit');
const md = document.getElementById('md');
const motherWithDraw = document.getElementById('motherWithDraw');
const mwd = document.getElementById('mwd');
const viewMotherSaldo = document.getElementById('viewMotherSaldo');
// deposito figlio
motherDeposit.addEventListener('submit', e => {
    e.preventDefault();
    intervallo(madre.depositMet(Number(md.value)), viewMotherSaldo, 'deposito');
    motherDeposit.reset();
});
// prelievo figlio
motherWithDraw.addEventListener('submit', e => {
    e.preventDefault();
    intervallo(madre.withDrawMet(Number(mwd.value)), viewMotherSaldo, 'prelievo ');
    motherWithDraw.reset();
});
// intervallo
function intervallo(n, viewSaldo, azione) {
    let c = Number(viewSaldo.innerHTML);
    const incr = setInterval(() => {
        if (azione === 'deposito')
            c++;
        else
            c--;
        viewSaldo.innerHTML = c;
        if (c === n)
            clearInterval(incr);
    }, 1);
}
