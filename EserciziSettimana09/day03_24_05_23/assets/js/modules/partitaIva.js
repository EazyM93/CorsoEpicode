"use strict";
// cod redditività principali : 40% / 54% / 62% / 67% / 78% / 86%
// aliquota inps attuale : 26,23%
// aliquote irpef : 15%
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartitaIva = void 0;
// provo soltanto con 3 cod redditività, quindi farò solo 3 moduli
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
exports.PartitaIva = PartitaIva;
