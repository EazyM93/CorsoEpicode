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
class Prodotto {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo, img) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.img = img;
    }
    ;
    getSaldoCapo() { return Number((this.prezzoivainclusa * (this.saldo / 100)).toFixed(2)); }
    ;
    getAcquistoCapo() { return Number((this.prezzoivainclusa - this.getSaldoCapo()).toFixed(2)); }
    ;
}
// array locale che contiene gli oggetti del json
function loadProdotti() {
    return __awaiter(this, void 0, void 0, function* () {
        const prodottiLocal = [];
        const prodotti = yield fetchProdotti();
        prodotti.forEach((prodotto) => {
            const singleProd = new Prodotto(prodotto.id, prodotto.codprod, prodotto.collezione, prodotto.capo, prodotto.modello, prodotto.quantita, prodotto.colore, prodotto.prezzoivaesclusa, prodotto.prezzoivainclusa, prodotto.disponibile, prodotto.saldo, prodotto.img);
            prodottiLocal.push(singleProd);
            console.log(prodottiLocal);
        });
        const productList = document.getElementById('productList');
        prodottiLocal.forEach((prodotto) => {
            const col = document.createElement('div');
            col.classList.add('col');
            col.innerHTML = `<div class="col mb-3">
        <div class="card h-100">
          <img src="${prodotto.img}" style="object-fit: fit; height:300px" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${prodotto.capo}</h5>
            <p class="card-text">Colore: ${prodotto.colore}</p>
            <p class="card-text mb-2">Disponibilità: ${prodotto.quantita} ${prodotto.disponibile}</p>
            <p class="card-text">Prezzo: <del>${prodotto.prezzoivainclusa} €</del><span style="color: red"> -${prodotto.saldo}%</span></strong></p>
            <p><strong class="fs-2">${prodotto.getAcquistoCapo()} €</p>
          </div>
        </div>
    </div>`;
            productList.appendChild(col);
        });
    });
}
// fetch
function fetchProdotti() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://646f6c1109ff19b120873b10.mockapi.io/abbigliamento');
            if (response.ok) {
                const prodotti = yield response.json();
                return prodotti;
            }
        }
        catch (_a) {
            (err) => console.log(err);
        }
    });
}
window.onload = () => {
    loadProdotti();
};
