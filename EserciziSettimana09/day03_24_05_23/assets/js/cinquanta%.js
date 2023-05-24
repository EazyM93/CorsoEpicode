"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cinquanta = void 0;
const partitaIva_1 = require("./partitaIva");
class Cinquanta extends partitaIva_1.PartitaIva {
    // posso assegnare un valore ad un elemento del construttore, rendendolo così opzionale in fase di creazione dell'istanza
    constructor(redditoAnnuoLordo, codRedd = 0.54) {
        super(redditoAnnuoLordo, codRedd);
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.codRedd = codRedd;
    }
}
exports.Cinquanta = Cinquanta;
