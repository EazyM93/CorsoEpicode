const formGame = document.getElementById('formGame');
const firstPlayerBet = document.getElementById('firstPlayerBet');
const secondPlayerBet = document.getElementById('secondPlayerBet');
const bet = document.getElementById('bet');
const result = document.getElementById('result');
const labelOne = document.getElementById('labelOne');
const labelTwo = document.getElementById('labelTwo');
const numeroRandom = Math.floor(Math.random() * (100 - 1) + 1);
formGame.addEventListener('submit', (event) => {
    event.preventDefault();
    const betOne = Number(firstPlayerBet.value);
    const betTwo = Number(secondPlayerBet.value);
    if (betOne === betTwo) {
        result.innerHTML = 'I GIORCATORI HANNO SELEZIONATO LO STESSO NUMERO';
    }
    else {
        result.innerHTML = vincitore(betOne, betTwo);
    }
});
function vincitore(one, two) {
    let message = '';
    if (one === numeroRandom) {
        message = 'PLAYER ONE WINS';
        labelOne.classList.add('greenText');
    }
    if (two === numeroRandom) {
        message = 'PLAYER TWO WINS';
        labelTwo.classList.add('greenText');
    }
    if (one !== numeroRandom && two !== numeroRandom) {
        if (Math.abs(numeroRandom - one) < Math.abs(numeroRandom - two)) {
            message = 'PLAYER ONE ALMOST GET IT';
            labelOne.classList.add('orangeText');
        }
        else {
            message = 'PLAYER TWO ALMOST GET IT';
            labelTwo.classList.add('orangeText');
        }
    }
    bet.innerHTML = numeroRandom.toString();
    return message;
}
