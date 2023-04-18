// ---------------------- ELEMENTI DEL DOM ----------------------
const stars = document.querySelectorAll('#starBox svg path');

// ---------------------- ANIMAZIONE STELLE ----------------------

stars.forEach((e, i) => {
    //ascolta il click di tutte le stelle
    e.addEventListener('click', () => {
        // i forEach creano degli indici per ciclare le stelle
        stars.forEach((star, j) => {
            //per ogni stella con indice inferiore a quella cliccata, cambia il colore
            (i >= j) ? star.setAttribute('fill', '#00FFFF') : star.setAttribute('fill', '#301257')
        })
    })
})