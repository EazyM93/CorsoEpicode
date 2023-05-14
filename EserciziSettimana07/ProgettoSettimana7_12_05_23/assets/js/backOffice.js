// --------------- FETCH ELEMENTS ---------------
const urlBack = 'https://striveschool-api.herokuapp.com/api/product/';

// --------------- FORM VALUES ---------------
const nameProduct = document.getElementById('nameProduct');
const descriptionProduct = document.getElementById('descriptionProduct');
const brandProduct = document.getElementById('brandProduct');
const imgProduct = document.getElementById('imgProduct');
const priceProduct = document.getElementById('priceProduct');

const esito = document.getElementById('esito');

const mainContainer = document.getElementById('mainContainer');


// --------------- FORM SUBMIT  ---------------
const formButton = document.getElementById('formButton');
formButton.addEventListener('click', (e) => {

    e.preventDefault();

    upload();

    e.target.closest('form').reset();

})

// --------------- ASYNC UPLOAD ---------------
async function upload(){

    const data = {
        name: nameProduct.value,
        description: descriptionProduct.value,
        brand: brandProduct.value,
        imageUrl: imgProduct.value,
        price: priceProduct.value
    }
    
    try{
        const raw = await fetch(urlBack, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDkxNzg4Zjc0MDAwMTQyODc0YTkiLCJpYXQiOjE2ODM4ODQzMTEsImV4cCI6MTY4NTA5MzkxMX0.uDShzOAu_0AX09N1terK94djRl-cDK4GcAMlNCSwKoQ',
                'Content-Type': 'application/json'
            }
        });

        if(raw.ok){
            esito.innerHTML = 'Caricamento riuscito.';
            esito.classList.add('greenSucceded');
            console.log('Upload Completed!');
        }

        if(!raw.ok){
            esito.innerHTML = 'Errore di caricamento!';
            esito.classList.add('redError');
        }

        setTimeout(() => {
            esito.innerHTML = '';
            esito.classList.remove('greenSucceded,redError');
        }, 2000);
       
    }catch(err){console.log(err)}

}

// --------------- MODIFY BUTTON  ---------------
const modifyButton = document.getElementById('modifyButton');

modifyButton.addEventListener('click', (e) => {

    loadSearchBtn();
    
})

// --------------- SEARCH BAR  ---------------
function loadSearchBtn(){

    // modifcia del bottone per tornare alla home
    const btnPage = document.getElementById('btnPage');

    btnPage.innerHTML = 'Back Office';

    btnPage.setAttribute('href', 'backOffice.html');

    // modifica del contenuto del main
    mainContainer.innerHTML = '';

    const searchBar = document.createElement('form');

    searchBar.setAttribute('method', 'post');

    searchBar.classList.add('w-50', 'shadow-lg', 'rounded-2', 'p-3', 'mb-5');

    searchBar.innerHTML = `<div class="mb-3">
    <input type="text" class="form-control" id="searchID" required>
</div>
<div class="text-center">
    <button type="submit" class="btn orangeBtn" onclick="loadProduct()">CERCA ID</button>
</div>`;

    mainContainer.appendChild(searchBar);
    mainContainer.innerHTML += `<div><p id="esito" class="m-0"></p></div>`

}

// --------------- MODIFY ZONE  ---------------
function loadProduct(){

    const searchID = document.getElementById('searchID').value;

    const arrProduct = (JSON.parse(localStorage.getItem('products')));

    mainContainer.innerHTML = '';

    let currentProduct = '';

    arrProduct.forEach(e => {

        if(e._id === searchID){

            currentProduct = e;

        }

    });

    const details = document.createElement('form');

    details.setAttribute('method', 'post');

    details.classList.add('w-50', 'shadow-lg', 'rounded-2', 'p-3');

    details.innerHTML = `<div class="mb-3">
    <label for="nameProduct" class="form-label">Nome prodotto</label>
    <input type="text" class="form-control" id="nameProduct" value="${currentProduct.name}" required>
</div>
<div class="mb-3">
    <label for="descriptionProduct" class="form-label">Descrizione prodotto</label>
    <input type="text" class="form-control" id="descriptionProduct" value="${currentProduct.description}" required>
</div>
<div class="mb-3">
    <label for="brandProduct" class="form-label">Brand prodotto</label>
    <input type="text" class="form-control" id="brandProduct" value="${currentProduct.brand}" required>
</div>
<div class="mb-3">
    <label for="imgProduct" class="form-label">Immagine prodotto</label>
    <input type="text" class="form-control" id="imgProduct" value="${currentProduct.imageUrl}" required>
</div>
<div class="mb-3">
    <label for="priceProduct" class="form-label">Prezzo prodotto<span style="font-size: 0.8em;"> (inserire valore numerico)</span></label>
    <input type="text" class="form-control" id="priceProduct" value="${currentProduct.price}" required>
</div>
<div class="mb-3 d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                       <button type="submit" class="btn me-2" onclick="modify(event)">Invia modifica</button>
                       <p id="esito" class="m-0"></p> 
                    </div>
                    <button id="deleteButton" type="button" class="btn">Elimina Prodotto</button>
                </div>`;

    mainContainer.appendChild(details);

}

// --------------- MODIFY BUTTON & PUT  ---------------
function modify(e){
    
    e.preventDefault();

    putMod();

    loadSearchBtn();

}


// --------------- PUT MOD ---------------
async function putMod(){

    const data = {
        name: nameProduct.value,
        description: descriptionProduct.value,
        brand: brandProduct.value,
        imageUrl: imgProduct.value,
        price: priceProduct.value
    }
    
    try{
        const raw = await fetch(urlBack, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDkxNzg4Zjc0MDAwMTQyODc0YTkiLCJpYXQiOjE2ODM4ODQzMTEsImV4cCI6MTY4NTA5MzkxMX0.uDShzOAu_0AX09N1terK94djRl-cDK4GcAMlNCSwKoQ',
                'Content-Type': 'application/json'
            }
        });

        

        if(raw.ok){
            esito.innerHTML = 'Aggiornamento riuscito.';
            esito.classList.add('greenSucceded');
            console.log('Upload Completed!');
        }

        if(!raw.ok){
            esito.innerHTML = 'Errore nel caricamento!';
            esito.classList.add('redError');
        }

        setTimeout(() => {
            esito.innerHTML = '';
            esito.classList.remove('greenSucceded,redError');
        }, 2000);
       
    }catch(err){console.log(err)}

}

// async function deletee(){
//     try{
//        fetch(url + '645e5dac88f74000142879f1', {
//     method:'DELETE',
//     headers: {
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDkxNzg4Zjc0MDAwMTQyODc0YTkiLCJpYXQiOjE2ODM4ODQzMTEsImV4cCI6MTY4NTA5MzkxMX0.uDShzOAu_0AX09N1terK94djRl-cDK4GcAMlNCSwKoQ',
//         'Content-Type': 'application/json'
//     }
//     }) 
//     }catch(err){
//         console.log('Attenzione errore');
//     }
    
// }
// deletee()