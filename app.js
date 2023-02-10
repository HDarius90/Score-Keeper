const buttonForPl1 = document.querySelector('#point-for-pl1');
const buttonForPl2 = document.querySelector('#point-for-pl2');
const resetButton = document.querySelector('#reset-button');
const player1Span = document.querySelector('#player1');
const player2Span = document.querySelector('#player2');
let player1value = parseInt(player1Span.innerText);
let player2value = parseInt(player2Span.innerText);

buttonForPl1.addEventListener('click', () => {
    const playingTo = parseInt(document.querySelector('#playingTo').value);
    player1value++;
    player1Span.innerText = player1value;
    if (playingTo === player1value) {
        player1Span.style.color = 'green';
        player2Span.style.color = 'red';
        buttonForPl1.disabled = true;
        buttonForPl2.disabled = true;
    }
})

buttonForPl2.addEventListener('click', () => {
    const playingTo = parseInt(document.querySelector('#playingTo').value);
    player2value++;
    player2Span.innerText = player2value;
    if (playingTo === player2value) {
        player2Span.style.color = 'green';
        player1Span.style.color = 'red';
        buttonForPl1.disabled = true;
        buttonForPl2.disabled = true;
    }

})

resetButton.addEventListener('click', () => {
    buttonForPl1.disabled = false;
    buttonForPl2.disabled = false;
    player1Span.style.color = '';
    player2Span.style.color = '';
    player1Span.innerText = '0';
    player2Span.innerText = '0';
    player1value = 0;
    player2value = 0;
})



