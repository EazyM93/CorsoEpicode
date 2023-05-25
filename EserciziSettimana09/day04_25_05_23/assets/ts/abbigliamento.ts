class Prodotto {
    
    constructor(
        public id:number,
        public codprod:number,
        public collezione:string,
        public capo:string,
        public modello:number,
        public quantita:number,
        public colore:string,
        public prezzoivaesclusa:number,
        public prezzoivainclusa:number,
        public disponibile:string,
        public saldo:number,
        public img:string
    ){};
    
    getSaldoCapo():number{return Number((this.prezzoivainclusa * (this.saldo/100)).toFixed(2))};

    getAcquistoCapo():number{return Number((this.prezzoivainclusa - this.getSaldoCapo()).toFixed(2))};

}

// array locale che contiene gli oggetti del json

async function loadProdotti() {
    
    const prodottiLocal:any = [];

    const prodotti:any = await fetchProdotti();
    
    prodotti.forEach((prodotto:any) => {

        const singleProd = new Prodotto(prodotto.id, prodotto.codprod, prodotto.collezione, prodotto.capo, prodotto.modello, prodotto.quantita, prodotto.colore, prodotto.prezzoivaesclusa, prodotto.prezzoivainclusa, prodotto.disponibile, prodotto.saldo, prodotto.img);

        prodottiLocal.push(singleProd);

        console.log(prodottiLocal)

    });

    const productList = document.getElementById('productList') as HTMLElement;

    prodottiLocal.forEach((prodotto:any) => {

        const col = document.createElement('div');

        col.classList.add('col');

        col.innerHTML = `<div class="col mb-3">
        <div class="card h-100">
          <img src="${prodotto.img}" style="object-fit: fit; height:300px" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${prodotto.capo}</h5>
            <p class="card-text">Colore: ${prodotto.colore}</p>
            <p class="card-text mb-2">Disponibilità: ${prodotto.quantita} ${prodotto.disponibile}</p>
            <p class="card-text">Prezzo: <del>${prodotto.prezzoivainclusa} €</del><span style="color: red"> -${prodotto.saldo}%</span></strong></p>
            <p><strong class="fs-2">${prodotto.getAcquistoCapo()} €</p>
          </div>
        </div>
    </div>`
        
        productList.appendChild(col);

    })
    
    
}

// fetch
async function fetchProdotti() {
    
    try{

        const response = await fetch('https://646f6c1109ff19b120873b10.mockapi.io/abbigliamento');     

        if(response.ok) {

            const prodotti = await response.json();

            return prodotti;
        }

    }catch{(err: string) => console.log(err)}

}

window.onload = () => {

    loadProdotti();

}