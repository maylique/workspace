function getCalc(){
    let age1 = document.querySelector('#age1').value
    let age2 = document.querySelector('#age2').value
    let output = document.querySelector('#output')

    output.innerHTML = age1 - age2
}