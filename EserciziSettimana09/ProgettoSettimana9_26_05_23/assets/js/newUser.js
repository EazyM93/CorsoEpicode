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
// URL API MOCKAPI
const url = 'https://646f6c1109ff19b120873b10.mockapi.io/users';
// ELEMENTI DEL FORM
const nuovoUtenteData = document.getElementById("nuovoUtenteData");
const nome = document.getElementById("nome");
const cellulare = document.getElementById("cellulare");
const imgProfilo = document.getElementById("imgProfilo");
// SUBMIT DEL FORM
nuovoUtenteData.addEventListener('submit', (e) => {
    e.preventDefault();
    // POST DEI DATI
    uploadUser(url);
    mainZone.innerHTML = `<h4 class="text-center text-white">PROFILO DI ${nome.value.toUpperCase()} CREATO CON SUCCESSO!</h4>`;
});
// FETCH POST
function uploadUser(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome.value,
                    cellulare: cellulare.value,
                    imgProfilo: imgProfilo.value,
                    carica: 0,
                    numeroChiamate: 0
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
