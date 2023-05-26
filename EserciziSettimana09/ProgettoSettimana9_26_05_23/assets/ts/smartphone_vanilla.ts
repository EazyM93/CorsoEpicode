interface smartphoneVanilla{carica:number;numeroChiamate:number}

class UserVanilla implements smartphoneVanilla{

    carica:number = 0;
    numeroChiamate: number = 0;

    constructor(public nome:string){}

    public displayUser():string{
        return `SIM DI -------------------------------- ${this.nome} --------------------------------`
    }

    public ricarica(unaRicarica:number):string {
        this.carica += unaRicarica;
        return `Ricarica effettuata: ${unaRicarica} €`;
    }

    public chiamata(minutiDurata:number):string{
        const costoChiamata = minutiDurata * 0.20;
        this.carica -= costoChiamata;
        this.numeroChiamate++;
        return `La chiamata è durata ${minutiDurata} minuti ed ha avuto un costo di: ${costoChiamata} €`;
    }

    public numero404():string{
        return `Credito residuo: ${this.carica} €`
    }
        

    public getNumeroChiamate():string{
        return `Numero chiamate effettuate: ${this.numeroChiamate}`;
    }

    public azzeraChiamate():string{
        this.numeroChiamate = 0;
        return `Chiamate resettate a 0 con successo!`
    }

}

const firstUserVanilla = new UserVanilla('Manuel');
const secondUserVanilla = new UserVanilla('Dario');
const thirdUserVanilla = new UserVanilla('Luca');

console.log(firstUserVanilla.displayUser());
console.log(firstUserVanilla.ricarica(20));
console.log('');
console.log(firstUserVanilla.chiamata(10));
console.log('');
console.log(firstUserVanilla.chiamata(20));
console.log('');
console.log(firstUserVanilla.getNumeroChiamate());
console.log(firstUserVanilla.numero404());
console.log(firstUserVanilla.azzeraChiamate());

console.log('');

console.log(secondUserVanilla.displayUser());
console.log(secondUserVanilla.ricarica(30));
console.log('');
console.log(secondUserVanilla.chiamata(5));
console.log('');
console.log(secondUserVanilla.chiamata(25));
console.log('');
console.log(secondUserVanilla.chiamata(10));
console.log('');
console.log(secondUserVanilla.getNumeroChiamate());
console.log(secondUserVanilla.numero404());
console.log(secondUserVanilla.azzeraChiamate());

console.log('');

console.log(thirdUserVanilla.displayUser());
console.log(thirdUserVanilla.ricarica(50));
console.log('');
console.log(thirdUserVanilla.chiamata(15));
console.log('');
console.log(thirdUserVanilla.chiamata(25));
console.log('');
console.log(thirdUserVanilla.chiamata(30));
console.log('');
console.log(thirdUserVanilla.chiamata(10));
console.log('');
console.log(thirdUserVanilla.getNumeroChiamate());
console.log(thirdUserVanilla.numero404());
console.log(thirdUserVanilla.azzeraChiamate());