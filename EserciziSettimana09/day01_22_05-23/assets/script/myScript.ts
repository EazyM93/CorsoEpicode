const formGame = document.getElementById('formGame') as HTMLFormElement;

const firstPlayerBet = document.getElementById('firstPlayerBet') as HTMLInputElement;
const secondPlayerBet = document.getElementById('secondPlayerBet') as HTMLInputElement;

const bet = document.getElementById('bet') as HTMLParagraphElement;
const result = document.getElementById('result') as HTMLParagraphElement;

const labelOne = document.getElementById('labelOne') as HTMLParagraphElement;
const labelTwo = document.getElementById('labelTwo') as HTMLParagraphElement;

const numeroRandom:number = Math.floor(Math.random()*(100-1)+1);

formGame.addEventListener('submit', (event) =>{

    event.preventDefault();

    const betOne:number = Number(firstPlayerBet.value);
    
    const betTwo:number = Number(secondPlayerBet.value);
    

    if(betOne === betTwo){
        result.innerHTML = 'I GIORCATORI HANNO SELEZIONATO LO STESSO NUMERO';
    }else{
        result.innerHTML = vincitore(betOne, betTwo);
    }


})

function vincitore(one:number, two:number):string{

    let message:string = '';

    if(one === numeroRandom){
        message = 'PLAYER ONE WINS';
        labelOne.classList.add('greenText');
    }

    if(two === numeroRandom){
        message = 'PLAYER TWO WINS';
        labelTwo.classList.add('greenText');
    }

    if(one !== numeroRandom && two !== numeroRandom){
        if(Math.abs(numeroRandom - one) < Math.abs(numeroRandom - two)){
            message = 'PLAYER ONE ALMOST GET IT';
            labelOne.classList.add('orangeText');
        }else{
            message = 'PLAYER TWO ALMOST GET IT';
            labelTwo.classList.add('orangeText');
        }
        
    }

    bet.innerHTML = numeroRandom.toString();

    return message;

}

