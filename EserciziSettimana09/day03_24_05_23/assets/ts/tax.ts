// ---------- QUARANTA ----------
import { Quaranta } from "./quaranta%";

const ral1:number = 3000;
const utente1 = new Quaranta(ral1);

console.log('---------- UTENTE AL 40% ----------');
console.log('');
console.log(`Ral: ${utente1.redditoAnnuoLordo.toFixed(2)} €`);
console.log(`L'imponibile: ${utente1.getUtile().toFixed(2)} €`);
console.log(`Tasse Inps: ${utente1.getTasseInps().toFixed(2)} €`);
console.log(`Tasse Irpef: ${utente1.getTasseIrpef().toFixed(2)} €`);
console.log(`Reddito Netto: ${utente1.getRedditoAnnuoNetto().toFixed(2)} €`);
console.log('');

// ---------- CINQUANTA ----------
import { Cinquanta } from "./cinquanta%";

const ral2:number = 3000;
const utente2 = new Cinquanta(ral2);

console.log('---------- UTENTE AL 54% ----------');
console.log('');
console.log(`Ral: ${utente2.redditoAnnuoLordo.toFixed(2)} €`);
console.log(`L'imponibile: ${utente2.getUtile().toFixed(2)} €`);
console.log(`Tasse Inps: ${utente2.getTasseInps().toFixed(2)} €`);
console.log(`Tasse Irpef: ${utente2.getTasseIrpef().toFixed(2)} €`);
console.log(`Reddito Netto: ${utente2.getRedditoAnnuoNetto().toFixed(2)} €`);
console.log('');

// ---------- SESSANTA ----------
import { Sessanta } from "./sessanta%";

const ral3:number = 3000;
const utente3 = new Sessanta(ral3);

console.log('---------- UTENTE AL 62% ----------');
console.log('');
console.log(`Ral: ${utente3.redditoAnnuoLordo.toFixed(2)} €`);
console.log(`L'imponibile: ${utente3.getUtile().toFixed(2)} €`);
console.log(`Tasse Inps: ${utente3.getTasseInps().toFixed(2)} €`);
console.log(`Tasse Irpef: ${utente3.getTasseIrpef().toFixed(2)} €`);
console.log(`Reddito Netto: ${utente3.getRedditoAnnuoNetto().toFixed(2)} €`);
console.log('');