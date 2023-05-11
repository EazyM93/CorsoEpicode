const cardsList = document.getElementById('cardsList');

// popolare il body
function populate(par){

    cardsList.innerHTML = '';

    for(i = 0; i < 9; i++){

        const newCard = document.createElement('div');

        newCard.classList.add('col-md-4');

        newCard.innerHTML = `<div class="card mb-4 shadow-sm">
        ${checkLoadImg(par)}
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            Thumbnail
          </text>
        </svg>
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary" ${checkEdit(par)}>
              ${checkLoadHide(par)}
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>`

      cardsList.appendChild(newCard);

    }

}

// check load
function checkLoadImg(par){

    if(par === 'oringin'){
        return '<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">'
    }else if(par === 'main'){
        return `<img src="${(JSON.parse(localStorage.getItem('photo')))[Math.floor(Math.random()*15)]['src']['large']}" width="100%" height="225 style="aspect-ratio: 1/1.7; object-fit: fit;">`
    }else if(par === 'secondary'){
        return `<img src="${(JSON.parse(localStorage.getItem('secondaryPhoto')))[Math.floor(Math.random()*15)]['src']['large']}" width="100%" height="225 style="aspect-ratio: 1/1.7; object-fit: fit;">`
    }

}

function checkLoadHide(par){

    if(par === 'oringin'){
        return 'Edit'
    }else if(par === 'main' || par === 'secondary'){
        return 'Hide'
    }

}

function checkEdit(par){

    if(par === 'main' || par === 'secondary'){
        return 'onclick="deleteCard(event)"'
    }

}

function deleteCard(event){

    event.target.closest('.col-md-4').remove();

}

// fetch
async function caricaUno(){

    fetch("https://api.pexels.com/v1/search?query=dog", {
        headers: {
            Authorization: "JrEIcKBqW6azLR5WmDR0L8NBAx5KXtF3EPL755gkc17NjI8d8zpYAp4f"
        }
    })

    .then((respone) => respone.json())
    .then((objPhoto) => {

        const arr = [];

        objPhoto['photos'].forEach(e => arr.push(e));

        localStorage.setItem('photo', JSON.stringify(arr));
        console.log(JSON.parse(localStorage.getItem('photo')))
    
    })

}

async function caricaDue(){

    fetch("https://api.pexels.com/v1/search?query=cat", {
        headers: {
            Authorization: "JrEIcKBqW6azLR5WmDR0L8NBAx5KXtF3EPL755gkc17NjI8d8zpYAp4f"
        }
    })

    .then((respone) => respone.json())
    .then((objPhoto) => {

        const arr = [];

        objPhoto['photos'].forEach(e => arr.push(e));

        localStorage.setItem('secondaryPhoto', JSON.stringify(arr));
        console.log(JSON.parse(localStorage.getItem('secondaryPhoto')))
    
    })

}

window.onload = () => {
    caricaUno();
    caricaDue();
    populate('oringin');
}
