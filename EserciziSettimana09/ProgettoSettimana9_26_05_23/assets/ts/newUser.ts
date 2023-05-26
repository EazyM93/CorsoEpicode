// URL API MOCKAPI
const url = 'https://646f6c1109ff19b120873b10.mockapi.io/users';

// ELEMENTI DEL FORM
const nuovoUtenteData = document.getElementById("nuovoUtenteData") as HTMLFormElement;
const nome = document.getElementById("nome") as HTMLInputElement | null;
const cellulare = document.getElementById("cellulare") as HTMLInputElement | null;
const imgProfilo = document.getElementById("imgProfilo") as HTMLInputElement | null;

// SUBMIT DEL FORM
nuovoUtenteData.addEventListener('submit', (e) => {

    e.preventDefault();

    // POST DEI DATI
    uploadUser(url);

    mainZone.innerHTML = `<h4 class="text-center text-white">PROFILO DI ${nome!.value.toUpperCase()} CREATO CON SUCCESSO!</h4>`

})

// FETCH POST
async function uploadUser(url:string){

    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome!.value,
                cellulare: cellulare!.value,
                imgProfilo: imgProfilo!.value,
                carica: 0,
                numeroChiamate: 0
            })
        });
        const data = await response.json();
        console.log(data);
    }catch{(err:String) => alert(err)}

}