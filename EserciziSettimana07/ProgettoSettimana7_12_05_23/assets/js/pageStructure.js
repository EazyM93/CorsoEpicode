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

// pages button creation (header)
const btnPage = (par, link) => {
   
    const backBtn = document.createElement('div');

    backBtn.classList.add('col', 'd-flex', 'align-items-center', 'justify-content-end');

    backBtn.innerHTML = `<a id="btnPage" href="${link}" class="btn">${par}</a>`;

    headerContainer.appendChild(backBtn);

}

// --------------- FETCH ---------------
async function carica(){
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        
        headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDkxNzg4Zjc0MDAwMTQyODc0YTkiLCJpYXQiOjE2ODM4ODQzMTEsImV4cCI6MTY4NTA5MzkxMX0.uDShzOAu_0AX09N1terK94djRl-cDK4GcAMlNCSwKoQ"}

    })

    .then(response => response.json())
}

// --------------- ONLOAD POPULATE ---------------
window.onload = () => {
    
    carica();

    // html file name
    const pageUrl = window.location.pathname;
    const fileName = pageUrl.substring(pageUrl.lastIndexOf('/')+1);

    populateStructure(fileName);

}