

const textInput = document.querySelector('#inputText')
const btn = document.querySelector('#btn')
const output = document.querySelector('#myList')

btn.addEventListener('click', ()=>{
    if (textInput.value !== ''){
        
        output.innerHTML += `<li>${textInput.value}</li>`
        textInput.value = ''
    } else {
    }
})