// Clienti

class FiglioAccount{

    // dati intestatario conto corrente
    nomeCliente:string;
    cognomeCliente:string;


    balanceInit:number = 0;

    constructor(nome:string, cognome:string){
        this.nomeCliente = nome;
        this.cognomeCliente = cognome;
    }

    displaySaldo():number{
        return this.balanceInit;
    }

    depositMet(versamento:number):number {
        
        return this.balanceInit += versamento;
         
    }

    withDrawMet(prelievo:number):number {

        return this.balanceInit -= prelievo;

    }

}

class MadreAccount extends FiglioAccount{

    constructor(nome:string, cognome:string){
        super(nome, cognome)
    }

    depositMet(versamento:number):number {
        
        return this.balanceInit += (versamento + (versamento * 0.1));

    }

}

const figlio = new FiglioAccount('Manuel', 'Centini');

const madre = new MadreAccount('Dua', 'Lipa');



// elementi dom figlio
const sonDeposit = document.getElementById('sonDeposit') as HTMLFormElement;
const sd = document.getElementById('sd') as HTMLInputElement | null;

const sonWithDraw = document.getElementById('sonWithDraw') as HTMLFormElement;
const swd = document.getElementById('swd') as HTMLInputElement | null;

const viewSonSaldo = document.getElementById('viewSonSaldo') as HTMLParagraphElement;

// deposito figlio
sonDeposit.addEventListener('submit', e => {

    e.preventDefault();

    intervallo(figlio.depositMet(Number(sd!.value)), viewSonSaldo, 'deposito');

    sonDeposit.reset();

})

// prelievo figlio
sonWithDraw.addEventListener('submit', e => {

    e.preventDefault();

    intervallo(figlio.withDrawMet(Number(swd!.value)), viewSonSaldo, 'prelievo ');

    sonWithDraw.reset();
})

// elementi dom madre
const motherDeposit = document.getElementById('motherDeposit') as HTMLFormElement;
const md = document.getElementById('md') as HTMLInputElement | null;

const motherWithDraw = document.getElementById('motherWithDraw') as HTMLFormElement;
const mwd = document.getElementById('mwd') as HTMLInputElement | null;

const viewMotherSaldo = document.getElementById('viewMotherSaldo') as HTMLParagraphElement;

// deposito figlio
motherDeposit.addEventListener('submit', e => {

    e.preventDefault();

    intervallo(madre.depositMet(Number(md!.value)), viewMotherSaldo, 'deposito');

    motherDeposit.reset();

})

// prelievo figlio
motherWithDraw.addEventListener('submit', e => {

    e.preventDefault();

    intervallo(madre.withDrawMet(Number(mwd!.value)), viewMotherSaldo, 'prelievo ');

    motherWithDraw.reset();
})

// intervallo
function intervallo(n:number, viewSaldo:any, azione:string):void{

    let c:number = Number(viewSaldo.innerHTML);

    const incr = setInterval(() => {

        if(azione === 'deposito') c++
        else c--;
        
        viewSaldo.innerHTML = c;

        if(c === n) clearInterval(incr)

    }, 1)
}