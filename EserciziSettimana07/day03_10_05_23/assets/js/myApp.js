// ---------- URL JSON ----------
const bookApi = 'https://striveschool-api.herokuapp.com/books';
const bookRequest = new Request(bookApi);

// ---------- ELEMENTI DOM ----------
const booksList = document.getElementById('booksList');
const cart = document.getElementById('cart');

// ---------- POPULATE LIST ----------
function poupulateList(arr){
    arr.forEach((book) => createCard(book));
}

// ---------- CREATE CARD ----------
function createCard(book){
    const newCard = document.createElement('div');

    newCard.classList.add('col', 'my-2');

    newCard.innerHTML = `<div class="card">
    <img src="${book.img}" class="card-img-top" style="aspect-ratio: 1/1.5; object-fit: fit;" alt="...">
    <div class="card-body">
      <h5 class="card-title mb-3">${book.title}</h5>
      <p class="card-text mb-2">ID-code: ${book.asin}</p>
      <p class="card-text mb-2">Category: ${book.category}</p>
      <div class="d-flex justify-content-between">
        <p class="card-text">${book.price}$</p>
        <button type="button" class="btn deleteBook" onclick="removeFromList('${book.asin}')">Delete</button>
      </div>
    </div>
    <button type="button" class="btn" onclick="addCart('${book.asin}')">Add to cart</button>
</div>`;

    booksList.appendChild(newCard);
}

// ---------- ADD CART ----------
function addCart(asin){
    
    (JSON.parse(localStorage.getItem('books'))).forEach(book => {

        if(book.asin === asin){
            const miniCard = document.createElement('div');

            miniCard.classList.add('text-center', 'mx-2', 'my-2');
                
            miniCard.innerHTML = `<img src="${book.img}" class="mb-2" width="150px" height="230px" alt=""><br>
            <button type="button" class="btn deleteBook" onclick="removeFromCart(this)">Remove</button>`;

            cart.appendChild(miniCard);
        }

    })
}

// ---------- REMOVE CART ----------
function removeFromCart(e){
    e.parentNode.remove();
}

// ---------- REMOVE FROM LIST ----------
function removeFromList(asin){

    const arr = JSON.parse(localStorage.getItem('books'));
    
    for(i = 0; i < arr.length; i++){
        if(arr[i].asin === asin){
            arr.splice(i, 1);
            localStorage.setItem('books', JSON.stringify(arr));
            booksList.innerHTML = '';
            poupulateList(JSON.parse(localStorage.getItem('books')));
        }
    }
}

// ---------- RESET LIST ----------
function resetList(){
    booksList.innerHTML = '';
    carica();
}

// ---------- FETCH ONLOAD ----------
async function carica(){
    fetch(bookRequest)
            .then((response) => response.json())
            .then((arrBooks) => {
        
                localStorage.setItem('books', JSON.stringify(arrBooks));
        
                poupulateList(JSON.parse(localStorage.getItem('books')));

            })
}

// ---------- FETCH ONLOAD ----------
window.onload = () => {

    if(localStorage.getItem('books')){
        poupulateList(JSON.parse(localStorage.getItem('books')));
    }else{
       carica();
    }

}