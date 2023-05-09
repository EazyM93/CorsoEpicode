//esercizio 2

// ---------- ELEMNTI DOM ----------
const list = document.getElementById('list');
const animalForm = document.getElementById('animalForm');
const btnAdd = document.getElementById('btnAdd');
const nome = document.getElementById('nome');
const padrone = document.getElementById('padrone');
const specie = document.getElementById('specie');
const razza = document.getElementById('razza');
const ownerAlert = document.getElementById('ownerAlert');

// ---------- ARRAY ARCHIVIAZIONE LISTA ----------
const animalList = [];

// ---------- AGGIUNTA ANIMALE ----------
btnAdd.addEventListener('click',(e) => {

    // impedisce alla pagina di resettarsi al click del bottone
    e.preventDefault();

    // genera un nuovo oggetto PET e lo inserisce in fondo al nostro array di archiviazione
    animalList.push(new Pet(nome.value, padrone.value, specie.value, razza.value));
    
    // generazione nuova card
    const newCard = document.createElement('div');
    
    // inserimento elementi della card
    newCard.innerHTML = `<div class="rounded-4 p-3 animalCard m-3"><div class="h3 border-bottom">${nome.value}</div><p><b>Padrone:</b> ${padrone.value}</p><p><b>Specie:</b> ${specie.value}</p><p><b>Razza:</b> ${razza.value}</p></div>`;

    // inserisci card nella lista
    list.appendChild(newCard);

    // resetta il form
    animalForm.reset();
})

// ---------- CLASS PET ----------
class Pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

    // verifica dello stesso padrone 
    sameOwner(otherPet){
        return (this.ownerName === otherPet.ownerName);
    }
}
