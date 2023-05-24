// cod redditività principali : 40% / 54% / 62% / 67% / 78% / 86%
// aliquota inps attuale : 26,23%
// aliquote irpef : 15%

// provo soltanto con 3 cod redditività, quindi farò solo 3 moduli



export class PartitaIva {

    // dichiarazione valori fissi della super classe
    public tasseInps:number;
    public tasseIrpef:number;

    // variabili del costruttore
    constructor(public redditoAnnuoLordo:number,public codRedd:number){

        // assegnazione valori fissi della super classe
        this.tasseInps = 0.2623,
        this.tasseIrpef = 0.15

    }

    // metodi 
    getUtile():number {return this.redditoAnnuoLordo * this.codRedd};

    getTasseInps():number {return this.getUtile() * this.tasseInps};

    getTasseIrpef():number {return this.getUtile() * this.tasseIrpef};
    
    getRedditoAnnuoNetto():number {return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())};

}