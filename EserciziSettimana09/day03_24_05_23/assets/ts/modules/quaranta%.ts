import { PartitaIva } from "./partitaIva";

export class Quaranta extends PartitaIva{

    // posso assegnare un valore ad un elemento del construttore, rendendolo così opzionale in fase di creazione dell'istanza
    constructor(public redditoAnnuoLordo:number, public codRedd:number = 0.4){

        super(redditoAnnuoLordo, codRedd)
            
    }
}