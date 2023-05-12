// --------------- BASE PAGE BUILD ---------------

// ----- POPULATE HEADER -----
const headerContainer = document.getElementById('headerContainer');

// html file name
const pageUrl = window.location.pathname;
const fileName = pageUrl.substring(pageUrl.lastIndexOf('/')+1);

function populateHeader(){

    // logo & site name creation
    const logo = document.createElement('div');

    logo.classList.add('col', 'd-flex', 'align-items-center');

    // populate logo & site name
    logo.innerHTML = `<a href="./homepage.html"><img src="assets/img/shopping-cart-304843_640.png" width="50px" class="me-0 me-lg-2" alt=""></a>
    <div class="w-100 text-start"><a href="./homepage.html" class="text-decoration-none d-sm-block"><h2 class="mb-0">CRUDAZON</h2></a></div>`

    // logo & site append on header
    headerContainer.appendChild(logo);

    //check for page
    if(fileName === 'homepage.html'){

        const backBtn = document.createElement('div');

        backBtn.classList.add('col', 'd-flex', 'align-items-center', 'justify-content-end');

        backBtn.innerHTML = `<a id="backOffice" href="backOffice.html" class="btn">Back Office</a>`;

        headerContainer.appendChild(backBtn);
    }

    if(fileName === 'backOffice.html'){

        const backBtn = document.createElement('div');

        backBtn.classList.add('col', 'd-flex', 'align-items-center', 'justify-content-end');

        backBtn.innerHTML = `<a id="backOffice" href="homepage.html" class="btn">Home</a>`;

        headerContainer.appendChild(backBtn);
    }

}

// ----- ONLOAD POPULATE -----
window.onload = () => {

    populateHeader();

}