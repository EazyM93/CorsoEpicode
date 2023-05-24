"use strict";
// aliquota inps attuale : 26,23%
// aliquote irpef : 15%
class PartitaIva {
    // variabili del costruttore
    constructor(redditoAnnuoLordo, codRedd) {
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.codRedd = codRedd;
        // assegnazione valori fissi della super classe
        this.tasseInps = 0.2623,
            this.tasseIrpef = 0.15;
    }
    // metodi 
    getUtile() { return this.redditoAnnuoLordo * this.codRedd; }
    ;
    getTasseInps() { return this.getUtile() * this.tasseInps; }
    ;
    getTasseIrpef() { return this.getUtile() * this.tasseIrpef; }
    ;
    getRedditoAnnuoNetto() { return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()); }
    ;
}
class Utente extends PartitaIva {
    constructor(redditoAnnuoLordo, codRedd) {
        super(redditoAnnuoLordo, codRedd);
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.codRedd = codRedd;
    }
}
const redditoLordo = document.getElementById('redditoLordo');
const selectCdr = document.getElementById('selectCdr');
const dataInput = document.getElementById('dataInput');
const ral = document.getElementById('ral');
const cdr = document.getElementById('cdr');
const imponibile = document.getElementById('imponibile');
const inps = document.getElementById('inps');
const irpef = document.getElementById('irpef');
const netto = document.getElementById('netto');
dataInput.addEventListener('submit', e => {
    e.preventDefault();
    const utente = new Utente(Number(redditoLordo.value), Number(selectCdr.value));
    ral.innerHTML = utente.redditoAnnuoLordo.toFixed(2);
    cdr.innerHTML = (Number(selectCdr.value) * 100).toString();
    imponibile.innerHTML = utente.getUtile().toFixed(2);
    inps.innerHTML = utente.getTasseInps().toFixed(2);
    irpef.innerHTML = utente.getTasseIrpef().toFixed(2);
    netto.innerHTML = utente.getRedditoAnnuoNetto().toFixed(2);
    dataInput.reset();
});
