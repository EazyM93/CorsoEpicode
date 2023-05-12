const url = 'https://striveschool-api.herokuapp.com/api/product/';

const formButton = document.getElementById('formButton');

const nameProduct = document.getElementById('nameProduct');
const descriptionProduct = document.getElementById('descriptionProduct');
const brandProduct = document.getElementById('brandProduct');
const imgProduct = document.getElementById('imgProduct');
const priceProduct = document.getElementById('priceProduct');


// pressing submit button
formButton.addEventListener('click', (e) => {

    e.preventDefault();

    upload();

    e.target.parentNode.reset();

})

// async upload
async function upload(){

    const data = {
        name: nameProduct.value,
        description: descriptionProduct.value,
        brand: brandProduct.value,
        imageUrl: imgProduct.value,
        price: priceProduct.value
    }
    
    try{
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDkxNzg4Zjc0MDAwMTQyODc0YTkiLCJpYXQiOjE2ODM4ODQzMTEsImV4cCI6MTY4NTA5MzkxMX0.uDShzOAu_0AX09N1terK94djRl-cDK4GcAMlNCSwKoQ',
                'Content-Type': 'application/json'
            }
        });
       
    } catch(err){
        console.log('Attenzione errore');
    }

}