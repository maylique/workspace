
let prozent = document.querySelector('.zeit')
const button = document.querySelector('#btn')

let zahl = parseFloat(prozent.textContent)


const bis0 = setInterval(() => {
    zahl--
    prozent.textContent = zahl + '%'
    if (zahl == 0) {
        clearInterval(bis0)
    }
}, 30);