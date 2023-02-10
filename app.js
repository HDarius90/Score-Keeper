const buttonForPl1 = document.querySelector('#point-for-pl1');
const buttonForPl2 = document.querySelector('#point-for-pl2');
const player1Span = document.querySelector('#player1');
const player2Span = document.querySelector('#player2');
const playingTo = parseInt(document.querySelector('#playingTo').value);

buttonForPl1.addEventListener('click', () => {
    let player1value = parseInt(player1Span.innerText);
    player1value++;
    player1Span.innerText = player1value;
})
buttonForPl2.addEventListener('click', () => {
    let player2value = parseInt(player2Span.innerText);
    player2value++;
    player2Span.innerText = player2value;
})

