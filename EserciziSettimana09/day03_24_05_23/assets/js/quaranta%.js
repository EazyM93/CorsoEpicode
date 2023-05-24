"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quaranta = void 0;
const partitaIva_1 = require("./partitaIva");
class Quaranta extends partitaIva_1.PartitaIva {
    // posso assegnare un valore ad un elemento del construttore, rendendolo così opzionale in fase di creazione dell'istanza
    constructor(redditoAnnuoLordo, codRedd = 0.4) {
        super(redditoAnnuoLordo, codRedd);
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.codRedd = codRedd;
    }
}
exports.Quaranta = Quaranta;
