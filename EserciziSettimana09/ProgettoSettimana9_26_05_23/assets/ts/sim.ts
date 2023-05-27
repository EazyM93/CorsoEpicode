interface infosim{carica:number;numeroChiamate:number}

class User implements infosim{

    constructor(public nome:string, public cellulare:string, public imgProfilo:string, public carica:number, public numeroChiamate: number){}

    public ricarica(unaRicarica:number):void{this.carica += unaRicarica};

    public chiamata(minutiDurata:number):void{this.carica -= minutiDurata * 0.20;this.numeroChiamate++};

    public numero404():number{return this.carica};

    public getNumeroChiamate():number{return this.numeroChiamate};

    public azzeraChiamate():void{this.numeroChiamate = 0};

}

const credito = document.getElementById("credito") as HTMLElement;
const utenteNome = document.getElementById("utenteNome") as HTMLElement;

// popola credito
async function currentUser(id:number){

    const user = await fetchRicaricaUser(id);

    const persona = new User(user.nome, user.cellulare, user.imgProfilo, user.carica, user.numeroChiamate);

    credito.innerHTML = `${persona.numero404().toFixed(2)}`;

    utenteNome.innerHTML = `${persona.nome}`;

}

// update credito con ricarica
async function ricaricaUpdate(num:number){

    const user = await fetchRicaricaUser(JSON.parse(localStorage.getItem('user')!));

    const persona = new User(user.nome, user.cellulare, user.imgProfilo, user.carica, user.numeroChiamate);

    persona.ricarica(num);

    patchUser(persona.numero404());

    credito.innerHTML = `${persona.numero404().toFixed(2)}`;

}

// patch user
async function patchUser(n:number){

    try{

        const response = await fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${JSON.parse(localStorage.getItem('user')!)}`, {

            method: 'PUT',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({carica: n})

        })

        const data = await response.json();
        console.log(data);

    }catch{(err:string) => alert(err)}

}

// fetch user
async function fetchRicaricaUser(id:number){

    try{

        const response = await fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${id}`);

        const data = await response.json();
        console.log(data);
        return data;

    }catch{(err:string) => alert(err)}
}

window.onload = () => {

    if(localStorage.getItem('user')){
        currentUser(JSON.parse(localStorage.getItem('user')!));
    }

}