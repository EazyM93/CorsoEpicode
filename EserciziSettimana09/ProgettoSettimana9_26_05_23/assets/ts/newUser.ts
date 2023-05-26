interface infosim{carica:number;numeroChiamate:number}

class User implements infosim{

    carica:number = 0;
    numeroChiamate: number = 0;

    constructor(public nome:string, public cellulare:string, public imgProfilo:string){}

    public ricarica(unaRicarica:number):void{this.carica += unaRicarica};

    public chiamata(minutiDurata:number):void{this.carica -= minutiDurata * 0.20;this.numeroChiamate++};

    public numero404():number{return this.carica};

    public getNumeroChiamate():number{return this.numeroChiamate};

    public azzeraChiamate():void{this.numeroChiamate = 0};

}

const nuovoUtenteData = document.getElementById("nuovoUtenteData") as HTMLFormElement;
const nome = document.getElementById("nome") as HTMLInputElement | null;
const cellulare = document.getElementById("cellulare") as HTMLInputElement | null;
const imgProfilo = document.getElementById("imgProfilo") as HTMLInputElement | null;


nuovoUtenteData.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nuovoUtente = new User(nome!.value, cellulare!.value, imgProfilo!.value);
})