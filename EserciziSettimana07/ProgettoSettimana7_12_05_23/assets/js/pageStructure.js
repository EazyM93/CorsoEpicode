// --------------- BASE PAGE BUILD ---------------
function populateStructure(fileName){
    populateHeader(fileName);
}

// --------------- POPULATE HEADER ---------------
function populateHeader(fileName){

    const headerContainer = document.getElementById('headerContainer');

    // logo & site name creation
    const logo = document.createElement('div');

    logo.classList.add('col', 'd-flex', 'align-items-center');

    // populate logo & site name
    logo.innerHTML = `<a href="./homepage.html"><img src="./assets/img/shopping-cart-304843_640.png" width="50px" class="me-0 me-lg-2" alt=""></a>
    <div class="w-100 text-start"><a href="./homepage.html" class="text-decoration-none d-sm-block"><h2 class="mb-0">CRUDAZON</h2></a></div>`;

    // logo & site append on header
    headerContainer.appendChild(logo);

    // check for page, populate with a different button
    if(fileName === 'homepage.html') btnPage('Back Office', 'backOffice.html');

    if(fileName === 'backOffice.html' || fileName === 'details.html') btnPage('Home', 'homepage.html');

}

// --------------- PAGES BUTTON CREATION (HEADER) ---------------
const btnPage = (par, link) => {
   
    const backBtn = document.createElement('div');

    backBtn.classList.add('col', 'd-flex', 'align-items-center', 'justify-content-end');

    backBtn.innerHTML = `<a id="btnPage" href="${link}" class="btn">${par}</a>`;

    headerContainer.appendChild(backBtn);

}

// --------------- POPULATE BODY ---------------
function populateBody(){

    const arrProduct = (JSON.parse(localStorage.getItem('products')));
    console.log(arrProduct)
    const productList = document.getElementById('productList');

    arrProduct.forEach(product => {

        const card = document.createElement('div');

        card.classList.add('col');

        card.innerHTML = `<div class="card h-100 shadow-lg">
    <img src="${product.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price} €</p>
    </div>
    <div class="card-body text-center"> <a href="./homepage.html?id=${product._id}" type="button" class="btn btnBlue findMore" onclick="findMore()">Scopri di più</a>
    </div>
    </div>`

        productList.appendChild(card);
        
    });

    
}

// --------------- FIND MORE ---------------


// --------------- FETCH ---------------
async function carica(){
    
    const url = 'https://striveschool-api.herokuapp.com/api/product/';
    
    try{
        const raw = await fetch(url, {
        
        headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDkxNzg4Zjc0MDAwMTQyODc0YTkiLCJpYXQiOjE2ODM4ODQzMTEsImV4cCI6MTY4NTA5MzkxMX0.uDShzOAu_0AX09N1terK94djRl-cDK4GcAMlNCSwKoQ"}

        })

        if(raw.ok){
            const response = await raw.json();
            
            
            localStorage.setItem('products', JSON.stringify(response));

            // populate with cards
            populateBody();
              
        }

    }catch(err){console.log(err)}
 
}

// --------------- ONLOAD POPULATE ---------------
window.onload = () => {
    
    // html file name
    const pageUrl = window.location.pathname;
    const fileName = pageUrl.substring(pageUrl.lastIndexOf('/')+1);

    if(fileName === 'homepage.html') carica();
    
    populateStructure(fileName);
    
}