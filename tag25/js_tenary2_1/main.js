

function lastMessage(){
    let input = document.querySelector('#message').value 
    let output = document.querySelector('#output')
    let outputError = document.querySelector('#outputError')


    output = input

    ? output.innerHTML = input.replace(input, input)
    : outputError.innerHTML = 'Error'
}