const output = document.querySelector('#output')

function weather(){
    let weather = document.querySelector('#weatherInput').value
    if(weather >= 8){
        output.innerHTML = 'super'
    }
    else if(weather >= 6){
        output.innerHTML = 'gut'
    }
    else if(weather >= 3){
        output.innerHTML = 'okay'
    }
    else if(weather >= 0){
        output.innerHTML = 'schlecht'
    }
    else{
        output.innerHTML = 'Error'
    }
}