// --------------- BASE PAGE BUILD ---------------

// ----- POPULATE HEADER -----
const header = document.querySelector('header');

function populateHeader(){

    // logo & site name creation
    const logo = document.createElement('div');

    logo.classList.add('container-fluid');

    // popuklate logo & site name
    logo.innerHTML = `<div class="row p-4">
    <div class="col d-flex align-items-center">
    <a href="./homepage.html" class="d-none d-lg-block"><img src="assets/img/shopping-cart-304843_640.png" width="50px" class="me-0 me-lg-2" alt=""></a>
    <div class="w-100 text-center text-lg-start"><a href="./homepage.html" class="text-decoration-none d-sm-block"><h2 class="mb-0">CRUDAZON</h2></a></div>
    </div>
    </div>`

    // html append on header
    header.appendChild(logo);

}

// ----- ONLOAD POPULATE -----
window.onload = () => {

    populateHeader();

}