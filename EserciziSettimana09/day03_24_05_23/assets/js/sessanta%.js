"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sessanta = void 0;
const partitaIva_1 = require("./partitaIva");
class Sessanta extends partitaIva_1.PartitaIva {
    // posso assegnare un valore ad un elemento del construttore, rendendolo così opzionale in fase di creazione dell'istanza
    constructor(redditoAnnuoLordo, codRedd = 0.62) {
        super(redditoAnnuoLordo, codRedd);
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.codRedd = codRedd;
    }
}
exports.Sessanta = Sessanta;
