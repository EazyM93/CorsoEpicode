"use strict";
class User {
    constructor(nome, cellulare, imgProfilo) {
        this.nome = nome;
        this.cellulare = cellulare;
        this.imgProfilo = imgProfilo;
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
// MANIPOLAZIONE DOM
const mainZone = document.getElementById("mainZone");
