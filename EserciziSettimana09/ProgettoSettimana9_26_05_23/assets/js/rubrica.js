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
class UserCall {
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
const chiamate = document.getElementById("chiamate");
// popola credito
function currentCalls(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchCallsUser(id);
        const persona = new UserCall(user.nome, user.cellulare, user.imgProfilo, user.carica, user.numeroChiamate);
        chiamate.innerHTML = `${persona.getNumeroChiamate()}`;
        utenteNome.innerHTML = `${persona.nome}`;
    });
}
// update credito con chiamata
function simulaChiamata(num) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchCallsUser(JSON.parse(localStorage.getItem('user')));
        const persona = new UserCall(user.nome, user.cellulare, user.imgProfilo, user.carica, user.numeroChiamate);
        persona.chiamata(num);
        putUser(persona.numero404(), persona.getNumeroChiamate());
        chiamate.innerHTML = `${persona.getNumeroChiamate()}`;
    });
}
// put user
function putUser(n, n2) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${JSON.parse(localStorage.getItem('user'))}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    carica: n,
                    numeroChiamate: n2
                })
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
function fetchCallsUser(id) {
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
// cancella chiamate
function cancellaChiamate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${JSON.parse(localStorage.getItem('user'))}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    numeroChiamate: 0
                })
            });
            if (response.ok) {
                currentCalls(JSON.parse(localStorage.getItem('user')));
            }
            const data = yield response.json();
            console.log(data);
        }
        catch (_a) {
            (err) => alert(err);
        }
    });
}
window.onload = () => {
    if (localStorage.getItem('user')) {
        currentCalls(JSON.parse(localStorage.getItem('user')));
    }
};
