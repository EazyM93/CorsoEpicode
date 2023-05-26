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

// MANIPOLAZIONE DOM
const mainZone = document.getElementById("mainZone") as HTMLElement;
const displayUsers = document.getElementById("displayUsers") as HTMLElement;
 
// POPOLA HOME
async function loadHome(): Promise<void>{

    const usersDati = await fecthUsers();
    
    console.log(usersDati);

    if(usersDati.length !== 0){
        usersDati.forEach((user:any) => {

            const userCard = document.createElement("div");

            userCard.classList.add('col', 'text-center', 'mb-2');

            userCard.innerHTML = `<button type="button" class="btn m-0" style="border: none;" onclick="selectedUser(${user!.id})"><img src="${user!.imgProfilo}" alt="" class="rounded-circle" width="75px"></button><p>${user!.nome}</p>`
            
            displayUsers.appendChild(userCard);
                    
        });
    }

    displayUsers.innerHTML += '<div class="col text-center"><a href="./newUser.html" class="btn m-0"><i class="bi bi-person-fill-add text-white" style="font-size: 3em;"></i></a><p>Aggiungi</p><p>Utente</p></div>';

}

// FECTH DEI DATI
async function fecthUsers(){

    try{

        const response = await fetch('https://646f6c1109ff19b120873b10.mockapi.io/users');

        const data = await response.json();
        console.log(data);
        return data;

    }catch{(err:string) => alert(err)}

}

window.onload = () => {
    loadHome();
}