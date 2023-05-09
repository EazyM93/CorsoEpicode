const nome = document.getElementById('nome');
const btnSubmit =document.getElementById('btnSubmit');
const btnCanc = document.getElementById('btnCanc');
const nameList = document.getElementById('nameList');
const myForm = document.getElementById('myForm');
const sessionTime = document.getElementById('sessionTime');
let count;

const nameArr = []

// ---------- check if localstorage exist ----------
if(localStorage.getItem('savedArr') !== null) {
    const nameArr = JSON.parse(localStorage.getItem('savedArr'));
}

// ---------- click on submit ----------
btnSubmit.addEventListener('click', (e) => {

    e.preventDefault();

    arrModify('add');

    myForm.reset(); 

})

// ---------- click on cancella ----------
btnCanc.addEventListener('click', () => arrModify('canc'))

// ---------- INVIA / CANCELLA ----------
function arrModify(event){

    (event === 'add') ? nameArr.push(nome.value) : nameArr.pop();

    localStorage.setItem('savedArr', JSON.stringify(nameArr));

    nameList.innerHTML = '';

    renderList();

}

// ---------- render list ----------
function renderList(){

    const arr = JSON.parse(localStorage.getItem('savedArr'));

    arr.forEach((e) => {

        const li = document.createElement('li');

        li.innerHTML = e;

        nameList.appendChild(li);

    });
}

// ---------- check for timer ----------
if(sessionStorage.getItem('c') !== null){

    count = Number(sessionStorage.getItem('c'));
    sessionTime.innerHTML = Number(sessionStorage.getItem('c'));

}else{

    count = 0;
    sessionStorage.setItem('c', count);
    sessionTime.innerHTML = Number(sessionStorage.getItem('c'));

}

// ---------- incremento intervallo ----------
setInterval(() => {

    count++;  
    sessionStorage.setItem('c', count);
    sessionTime.innerHTML = Number(sessionStorage.getItem('c'));  

}, 1000)


// ---------- onload ----------
window.onload = () => {
    
    if(localStorage.getItem('savedArr') !== null) {renderList()}

}