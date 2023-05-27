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
    constructor(nome, cellulare, imgProfilo, carica, numeroChiamate) {
        this.nome = nome;
        this.cellulare = cellulare;
        this.imgProfilo = imgProfilo;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
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
const credito = document.getElementById("credito");
const utenteNome = document.getElementById("utenteNome");
// popola credito
function currentUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchRicaricaUser(id);
        const persona = new User(user.nome, user.cellulare, user.imgProfilo, user.carica, user.numeroChiamate);
        credito.innerHTML = `${persona.numero404().toFixed(2)}`;
        utenteNome.innerHTML = `${persona.nome}`;
    });
}
// update credito con ricarica
function ricaricaUpdate(num) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchRicaricaUser(JSON.parse(localStorage.getItem('user')));
        const persona = new User(user.nome, user.cellulare, user.imgProfilo, user.carica, user.numeroChiamate);
        persona.ricarica(num);
        patchUser(persona.numero404());
        credito.innerHTML = `${persona.numero404().toFixed(2)}`;
    });
}
// patch user
function patchUser(n) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${JSON.parse(localStorage.getItem('user'))}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ carica: n })
            });
            const data = yield response.json();
            console.log(data);
        }
        catch (_a) {
            (err) => alert(err);
        }
    });
}
// fetch user
function fetchRicaricaUser(id) {
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
    if (localStorage.getItem('user')) {
        currentUser(JSON.parse(localStorage.getItem('user')));
    }
};
