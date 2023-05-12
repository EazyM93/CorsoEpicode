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
    <a href="./homepage.html"><img src="assets/img/shopping-cart-304843_640.png" width="50px" class="me-2" alt=""></a>
        <h2 class="mb-0">CRUDAZON</h2>
    </div>
    </div>`

    // html append on header
    header.appendChild(logo);

}

// ----- ONLOAD POPULATE -----
window.onload = () => {

    populateHeader();

}