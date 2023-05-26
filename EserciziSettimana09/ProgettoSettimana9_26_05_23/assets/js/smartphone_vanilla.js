"use strict";
class UserVanilla {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) { this.carica += unaRicarica; }
    ;
    chiamata(minutiDurata) { this.carica -= minutiDurata * 0.20; this.numeroChiamate++; }
    ;
    numero404() { return this.carica; }
    ;
    getNumeroChiamate() { return this.numeroChiamate; }
    ;
    azzeraChiamate() { this.numeroChiamate = 0; }
    ;
}
const firstUserVanilla = new UserVanilla;
const secondUserVanilla = new UserVanilla;
const thirdUserVanilla = new UserVanilla;
