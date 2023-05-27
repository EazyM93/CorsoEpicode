

// MANIPOLAZIONE DOM
const mainZone = document.getElementById("mainZone") as HTMLElement;
const displayUsers = document.getElementById("displayUsers") as HTMLElement;
const utenteAttuale = document.getElementById("utenteAttuale") as HTMLElement;

 
// POPOLA HOME
async function loadHome(): Promise<void>{

    const usersDati = await fetchUsers();
    
    console.log(usersDati);

    // inserimento lista users
    if(usersDati.length !== 0){
        usersDati.forEach((user:any) => {

            const userCard = document.createElement("div");

            userCard.classList.add('col', 'text-center', 'mb-2');

            userCard.innerHTML = `<button type="button" class="btn m-0" style="border: none;" onclick="selectedUser(${user!.id})"><img src="${user!.imgProfilo}" alt="" class="rounded-circle shad" width="75px"></button><p>${user!.nome}</p>`
            
            displayUsers.appendChild(userCard);
                    
        });
    }

}

// SELECTED USER
async function selectedUser(id:number){

    const user = await fetchSelectedUser(id);

    localStorage.setItem('user', JSON.stringify(id));

    utenteAttuale.innerHTML = `<p>CURRENT USER</p><img src="${user!.imgProfilo}" alt="" class="rounded-circle" width="75px"><p>${user!.nome}</p>`

}

// SELECT USER

// FECTH DEI DATI
async function fetchUsers(){

    try{

        const response = await fetch('https://646f6c1109ff19b120873b10.mockapi.io/users');

        const data = await response.json();
        console.log(data);
        return data;

    }catch{(err:string) => alert(err)}

}

async function fetchSelectedUser(id:number){

    try{

        const response = await fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${id}`);

        const data = await response.json();
        console.log(data);
        return data;

    }catch{(err:string) => alert(err)}
}

window.onload = () => {
    loadHome();
    if(localStorage.getItem('user')){
        selectedUser(JSON.parse(localStorage.getItem('user')!));
    }
}