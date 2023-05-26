"use strict";
class UserVanilla {
    constructor(nome) {
        this.nome = nome;
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    displayUser() {
        return `SIM DI -------------------------------- ${this.nome} --------------------------------`;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
        return `Ricarica effettuata: ${unaRicarica} €`;
    }
    chiamata(minutiDurata) {
        const costoChiamata = minutiDurata * 0.20;
        this.carica -= costoChiamata;
        this.numeroChiamate++;
        return `La chiamata è durata ${minutiDurata} minuti ed ha avuto un costo di: ${costoChiamata} €`;
    }
    numero404() {
        return `Credito residuo: ${this.carica} €`;
    }
    getNumeroChiamate() {
        return `Numero chiamate effettuate: ${this.numeroChiamate}`;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        return `Chiamate resettate a 0 con successo!`;
    }
}
const firstUserVanilla = new UserVanilla('Manuel');
const secondUserVanilla = new UserVanilla('Dario');
const thirdUserVanilla = new UserVanilla('Luca');
console.log(firstUserVanilla.displayUser());
console.log(firstUserVanilla.ricarica(20));
console.log('');
console.log(firstUserVanilla.chiamata(10));
console.log('');
console.log(firstUserVanilla.chiamata(20));
console.log('');
console.log(firstUserVanilla.getNumeroChiamate());
console.log(firstUserVanilla.numero404());
console.log(firstUserVanilla.azzeraChiamate());
console.log('');
console.log(secondUserVanilla.displayUser());
console.log(secondUserVanilla.ricarica(30));
console.log('');
console.log(secondUserVanilla.chiamata(5));
console.log('');
console.log(secondUserVanilla.chiamata(25));
console.log('');
console.log(secondUserVanilla.chiamata(10));
console.log('');
console.log(secondUserVanilla.getNumeroChiamate());
console.log(secondUserVanilla.numero404());
console.log(secondUserVanilla.azzeraChiamate());
console.log('');
console.log(thirdUserVanilla.displayUser());
console.log(thirdUserVanilla.ricarica(50));
console.log('');
console.log(thirdUserVanilla.chiamata(15));
console.log('');
console.log(thirdUserVanilla.chiamata(25));
console.log('');
console.log(thirdUserVanilla.chiamata(30));
console.log('');
console.log(thirdUserVanilla.chiamata(10));
console.log('');
console.log(thirdUserVanilla.getNumeroChiamate());
console.log(thirdUserVanilla.numero404());
console.log(thirdUserVanilla.azzeraChiamate());
