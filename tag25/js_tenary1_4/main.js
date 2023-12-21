

function checkPass(){
    let input = document.querySelector('#pass').value 
    let output = document.querySelector('#output')


    input.length > 8

    ? output.innerHTML = 'korrekt'
    : output.innerHTML = 'zu kurz'
}