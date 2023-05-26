"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const nuovoUtenteData = document.getElementById("nuovoUtenteData");
const nome = document.getElementById("nome");
const cellulare = document.getElementById("cellulare");
const imgProfilo = document.getElementById("imgProfilo");
nuovoUtenteData.addEventListener('submit', (e) => {
    e.preventDefault();
    const nuovoUtente = new User(nome.value, cellulare.value, imgProfilo.value);
    uploadUser(nuovoUtente);
});
//fetch post
function uploadUser(utente) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://646f6c1109ff19b120873b10.mockapi.io/users';
        try {
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(utente)
            });
            const data = yield response.json();
            console.log(data);
        }
        catch (_a) {
            (err) => alert(err);
        }
    });
}
