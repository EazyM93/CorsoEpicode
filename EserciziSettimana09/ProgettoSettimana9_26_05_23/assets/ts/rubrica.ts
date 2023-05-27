interface infosim{carica:number;numeroChiamate:number}

class UserCall implements infosim{

    constructor(public nome:string, public cellulare:string, public imgProfilo:string, public carica:number, public numeroChiamate: number){}

    public ricarica(unaRicarica:number):void{this.carica += unaRicarica};

    public chiamata(minutiDurata:number):void{this.carica -= minutiDurata * 0.20;this.numeroChiamate++};

    public numero404():number{return this.carica};

    public getNumeroChiamate():number{return this.numeroChiamate};

    public azzeraChiamate():void{this.numeroChiamate = 0};

}

const chiamate = document.getElementById("chiamate") as HTMLElement;

// popola credito
async function currentCalls(id:number){

    const user = await fetchCallsUser(id);

    const persona = new UserCall(user.nome, user.cellulare, user.imgProfilo, user.carica, user.numeroChiamate);

    chiamate.innerHTML = `${persona.getNumeroChiamate()}`;

    utenteNome.innerHTML = `${persona.nome}`;

}

// update credito con chiamata
async function simulaChiamata(num:number){

    const user = await fetchCallsUser(JSON.parse(localStorage.getItem('user')!));

    const persona = new UserCall(user.nome, user.cellulare, user.imgProfilo, user.carica, user.numeroChiamate);

    persona.chiamata(num);

    putUser(persona.numero404(), persona.getNumeroChiamate());

    chiamate.innerHTML = `${persona.getNumeroChiamate()}`;

}

// put user
async function putUser(n:number, n2:number){

    try{

        const response = await fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${JSON.parse(localStorage.getItem('user')!)}`, {

            method: 'PUT',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                carica: n,
                numeroChiamate: n2
            })

        })

        const data = await response.json();
        console.log(data);

    }catch{(err:string) => alert(err)}

}

// fetch user
async function fetchCallsUser(id:number){

    try{

        const response = await fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${id}`);

        const data = await response.json();
        console.log(data);
        return data;

    }catch{(err:string) => alert(err)}
}

// cancella chiamate
async function cancellaChiamate(){

    try{

        const response = await fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${JSON.parse(localStorage.getItem('user')!)}`, {

            method: 'PUT',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                numeroChiamate: 0
            })

        })

        if(response.ok){
            currentCalls(JSON.parse(localStorage.getItem('user')!));
        }

        const data = await response.json();
        console.log(data);

    }catch{(err:string) => alert(err)}

}

window.onload = () => {

    if(localStorage.getItem('user')){
        currentCalls(JSON.parse(localStorage.getItem('user')!));
    }

}