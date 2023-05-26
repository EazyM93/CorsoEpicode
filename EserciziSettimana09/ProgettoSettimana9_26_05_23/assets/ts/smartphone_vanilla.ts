interface smartphoneVanilla{carica:number;numeroChiamate:number}

class UserVanilla implements smartphoneVanilla{

    carica:number = 0;
    numeroChiamate: number = 0;

    public ricarica(unaRicarica:number):void{this.carica += unaRicarica};

    public chiamata(minutiDurata:number):void{this.carica -= minutiDurata * 0.20;this.numeroChiamate++};

    public numero404():number{return this.carica};

    public getNumeroChiamate():number{return this.numeroChiamate};

    public azzeraChiamate():void{this.numeroChiamate = 0};

}

const firstUserVanilla = new UserVanilla;
const secondUserVanilla = new UserVanilla;
const thirdUserVanilla = new UserVanilla;