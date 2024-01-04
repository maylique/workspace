console.log('Start: Warte für 3 Sekunden');

let countdownZahl = 11

const countdown = setInterval(() => {
    countdownZahl--
    console.log(countdownZahl);
    if (countdownZahl == 0) {
        clearInterval(countdown)
        console.log('Feierabend biatch');
    } else if (countdownZahl == 8){
        console.log('Congrats du hast 3 Sekunden Lebenszeit verschwendet omegalul')
    }
}, 1000);

