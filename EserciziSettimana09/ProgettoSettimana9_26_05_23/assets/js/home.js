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
// MANIPOLAZIONE DOM
const mainZone = document.getElementById("mainZone");
const displayUsers = document.getElementById("displayUsers");
// POPOLA HOME
function loadHome() {
    return __awaiter(this, void 0, void 0, function* () {
        const usersDati = yield fecthUsers();
        console.log(usersDati);
        if (usersDati.length !== 0) {
            usersDati.forEach((user) => {
                const userCard = document.createElement("div");
                userCard.classList.add('col', 'text-center', 'mb-2');
                userCard.innerHTML = `<button type="button" class="btn m-0" style="border: none;" onclick="selectedUser(${user.id})"><img src="${user.imgProfilo}" alt="" class="rounded-circle" width="75px"></button><p>${user.nome}</p>`;
                displayUsers.appendChild(userCard);
            });
        }
        displayUsers.innerHTML += '<div class="col text-center"><a href="./newUser.html" class="btn m-0"><i class="bi bi-person-fill-add text-white" style="font-size: 3em;"></i></a><p>Aggiungi</p><p>Utente</p></div>';
    });
}
// FECTH DEI DATI
function fecthUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://646f6c1109ff19b120873b10.mockapi.io/users');
            const data = yield response.json();
            console.log(data);
            return data;
        }
        catch (_a) {
            (err) => alert(err);
        }
    });
}
window.onload = () => {
    loadHome();
};
