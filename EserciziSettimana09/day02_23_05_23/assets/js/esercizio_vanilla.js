"use strict";
class SonAccount {
    // dati intestatario conto corrente
    nomeCliente;
    cognomeCliente;
    balanceInit = 0;
    constructor(nome, cognome) {
        this.nomeCliente = nome;
        this.cognomeCliente = cognome;
    }
    displayCliente() {
        return `--- INTESTATARIO CONTO CORRENTE : ${this.nomeCliente} ${this.cognomeCliente} ---`;
    }
    oneDeposit(versamento) {
        console.log(`Saldo iniziale: ${this.balanceInit} €`);
        console.log(`Versamento: ${versamento} €`);
        this.balanceInit += versamento;
        return `Saldo attuale: ${this.balanceInit} €`;
    }
    oneWithDraw(prelievo) {
        console.log(`Saldo iniziale: ${this.balanceInit} €`);
        console.log(`Prelievo: ${prelievo} €`);
        this.balanceInit -= prelievo;
        return `Saldo attuale: ${this.balanceInit} €`;
    }
    twoDeposit(versamento) {
        console.log(`Saldo iniziale: ${this.balanceInit} €`);
        console.log(`Versamento: ${versamento} €`);
        this.balanceInit += versamento;
        return `Saldo attuale: ${this.balanceInit} €`;
    }
    twoWithDraw(prelievo) {
        console.log(`Saldo iniziale: ${this.balanceInit} €`);
        console.log(`Prelievo: ${prelievo} €`);
        this.balanceInit -= prelievo;
        return `Saldo attuale: ${this.balanceInit} €`;
    }
}
class MotherAccount extends SonAccount {
    constructor(nome, cognome) {
        super(nome, cognome);
    }
    oneDeposit(versamento) {
        console.log(`Saldo iniziale: ${this.balanceInit} €`);
        console.log(`Versamento: ${versamento} €`);
        this.balanceInit += versamento;
        this.balanceInit += (this.balanceInit * 0.1);
        return `Saldo attuale con interessi (10%): ${this.balanceInit} €`;
    }
    twoDeposit(versamento) {
        console.log(`Saldo iniziale: ${this.balanceInit} €`);
        console.log(`Versamento: ${versamento} €`);
        this.balanceInit += versamento;
        this.balanceInit += (this.balanceInit * 0.1);
        return `Saldo attuale con interessi (10%): ${this.balanceInit} €`;
    }
}
const manuel = new SonAccount('Manuel', 'Centini');
console.log(manuel.displayCliente());
console.log('');
console.log(manuel.oneDeposit(200));
console.log('');
console.log(manuel.oneWithDraw(100));
console.log('');
console.log(manuel.twoDeposit(300));
console.log('');
console.log(manuel.twoWithDraw(200));
console.log('');
const lipa = new MotherAccount('Dua', 'Lipa');
console.log(lipa.displayCliente());
console.log('');
console.log(lipa.oneDeposit(200));
console.log('');
console.log(lipa.oneWithDraw(100));
console.log('');
console.log(lipa.twoDeposit(300));
console.log('');
console.log(lipa.twoWithDraw(200));
console.log('');
