
const counter = document.getElementById('clickMe')

let anzahl = 0
counter.addEventListener('click', ()=>{
    anzahl++
    counter.innerHTML = `Click me : ${anzahl}`
    })


