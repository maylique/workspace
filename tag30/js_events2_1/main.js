
const grau = document.querySelector('#grauTaste')
const weiß = document.querySelector('#weissTaste')
const blau = document.querySelector('#blauTaste')
const gelb = document.querySelector('#gelbTaste')
const html = document.querySelector('html')


grau.addEventListener('click', ()=>{
    html.style.backgroundColor = 'grey'
})
weiß.addEventListener('click', ()=>{
    html.style.backgroundColor = 'white'
})
blau.addEventListener('click', ()=>{
    html.style.backgroundColor = 'blue'
})
gelb.addEventListener('click', ()=>{
    html.style.backgroundColor = 'yellow'
})