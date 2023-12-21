const liste = document.querySelector('#myList')
const unten = document.querySelector('.unten')
const output = document.querySelector('output')


const buttonArray = Array.from(unten.children)
const listArray = Array.from(liste.children)
const buttonFirst = buttonArray[0]
const buttonLast = buttonArray[2]
const buttonFirstNext = buttonArray[4]
const buttonLastNext = buttonArray[6]

buttonFirst.addEventListener('click', ()=>{
    output.textContent = liste.firstElementChild.textContent
})
buttonLast.addEventListener('click', ()=>{
    output.textContent = liste.lastElementChild.textContent
})
buttonFirstNext.addEventListener('click', ()=>{
    output.textContent = liste.firstElementChild.nextElementSibling.textContent
})
buttonLastNext.addEventListener('click', ()=>{
    output.textContent = liste.lastElementChild.previousElementSibling.textContent
})

