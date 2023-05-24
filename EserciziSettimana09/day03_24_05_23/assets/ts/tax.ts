// aliquota inps attuale : 26,23%
// aliquote irpef : 15%

interface Data{
    
    redditoAnnuoLordo:number
    codRedd:number
    tasseInps:number
    tasseIrpef:number

}

abstract class PartitaIva implements Data {

    // variabili del costruttore
    constructor(public redditoAnnuoLordo:number,public codRedd:number, public tasseInps:number = 0.2623, public tasseIrpef:number = 0.15){}

    // metodi 
    getUtile():number {return this.redditoAnnuoLordo * this.codRedd};

    getTasseInps():number {return this.getUtile() * this.tasseInps};

    getTasseIrpef():number {return this.getUtile() * this.tasseIrpef};
    
    getRedditoAnnuoNetto():number {return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())};

}

class Utente extends PartitaIva{}

const redditoLordo = document.getElementById('redditoLordo') as HTMLInputElement | null;
const selectCdr = document.getElementById('selectCdr') as HTMLSelectElement | null;
const dataInput = document.getElementById('dataInput') as HTMLFormElement;

const ral = document.getElementById('ral') as HTMLParagraphElement;
const cdr = document.getElementById('cdr') as HTMLParagraphElement;
const imponibile = document.getElementById('imponibile') as HTMLParagraphElement;
const inps = document.getElementById('inps') as HTMLParagraphElement;
const irpef = document.getElementById('irpef') as HTMLParagraphElement;
const netto = document.getElementById('netto') as HTMLParagraphElement;


dataInput.addEventListener('submit', e => {

    e.preventDefault();

    const utente = new Utente(Number(redditoLordo!.value), Number(selectCdr!.value))

    ral.innerHTML = utente.redditoAnnuoLordo.toFixed(2);
    cdr.innerHTML = (Number(selectCdr!.value) * 100).toString();
    imponibile.innerHTML = utente.getUtile().toFixed(2);
    inps.innerHTML = utente.getTasseInps().toFixed(2);
    irpef.innerHTML = utente.getTasseIrpef().toFixed(2);
    netto.innerHTML = utente.getRedditoAnnuoNetto().toFixed(2);

    dataInput.reset()

})