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
const utenteAttuale = document.getElementById("utenteAttuale");
// POPOLA HOME
function loadHome() {
    return __awaiter(this, void 0, void 0, function* () {
        const usersDati = yield fetchUsers();
        console.log(usersDati);
        // inserimento lista users
        if (usersDati.length !== 0) {
            usersDati.forEach((user) => {
                const userCard = document.createElement("div");
                userCard.classList.add('col', 'text-center', 'mb-2');
                userCard.innerHTML = `<button type="button" class="btn m-0" style="border: none;" onclick="selectedUser(${user.id})"><img src="${user.imgProfilo}" alt="" class="rounded-circle shad" width="75px"></button><p>${user.nome}</p>`;
                displayUsers.appendChild(userCard);
            });
        }
    });
}
// SELECTED USER
function selectedUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchSelectedUser(id);
        localStorage.setItem('user', JSON.stringify(id));
        utenteAttuale.innerHTML = `<p>CURRENT USER</p><img src="${user.imgProfilo}" alt="" class="rounded-circle" width="75px"><p>${user.nome}</p>`;
    });
}
// SELECT USER
// FECTH DEI DATI
function fetchUsers() {
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
function fetchSelectedUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${id}`);
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
    if (localStorage.getItem('user')) {
        selectedUser(JSON.parse(localStorage.getItem('user')));
    }
};
