// DOM Element
const users = document.getElementById('users') as HTMLElement;

// deleatble element
async function loadDeletableUsers() {

    const usersDati = await fecthUsersDelete();

    if(usersDati.length !== 0){
        usersDati.forEach((user:any) => {

            const userCard = document.createElement("div");

            userCard.classList.add('w-100', 'mb-2', 'px-3', 'rounded-pill', 'd-flex', 'justify-content-between', 'align-items-center');

            userCard.style.backgroundColor = 'white';

            userCard.style.height = 'fit-content'

            userCard.innerHTML = `<p class="fs-4">${user!.nome}</p>
            <button type="button" class="btn p-0" onclick="deleteUser(${user!.id})" style="border: none"><i class="bi bi-x-circle-fill fs-4 text-danger"></i></button>`
            
            users.appendChild(userCard);
                    
        });
    }

}

// loading usesrs
async function fecthUsersDelete(){

    try{

        const response = await fetch('https://646f6c1109ff19b120873b10.mockapi.io/users');

        const data = await response.json();
        console.log(data);
        return data;

    }catch{(err:string) => alert(err)}

}

// deleting user
async function deleteUser(id:any){

    try{

        const response = await fetch(`https://646f6c1109ff19b120873b10.mockapi.io/users/${id}`, {
            method: 'DELETE'
        });

        const data = await response.json();
        console.log(data);
        users.innerHTML = '';
        loadDeletableUsers();

    }catch{(err:string) => alert(err)}

}

window.onload = () => {

    loadDeletableUsers();

}