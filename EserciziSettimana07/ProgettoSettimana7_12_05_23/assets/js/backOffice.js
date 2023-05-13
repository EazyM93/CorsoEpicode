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

    const btnPage = document.getElementById('btnPage');

    btnPage.innerHTML = 'Back Office';

    btnPage.setAttribute('href', 'backOffice.html');

    mainContainer.innerHTML = '';

    const searchBar = document.createElement('div');

    

})


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