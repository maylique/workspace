
let prozent = document.querySelector('.zeit')
const button = document.querySelector('#btn')

let zahl = parseFloat(prozent.textContent)


const bis0 =() => {
    zahl--
    prozent.textContent = zahl + '%'
    if (zahl == 0) {
        stop()
    }
}

const start = () => {
    inter = setInterval(bis0, 30)
}

const stop = () => {
    clearInterval(inter)
}


const beides = () => {
    start()
    bis0()
}

button.addEventListener('click', beides)