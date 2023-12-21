

function checkAge(){
    let input = document.querySelector('#ageInput').value 
    let output = document.querySelector('#output')
    let over18 = input > 18


    ? output.innerHTML = 'Volljährig'
    : output.innerHTML = 'minderjährig'
}