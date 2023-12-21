function check(){

    let Land = document.querySelector('#bundeslandInfo').value 

    let output = document.querySelector('#bundeslandInfoErgebnis')

    switch(Land){
        case 'Hamburg':
            output.innerHTML = 'Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt'
            break
        
        case 'Bayern':
            output.innerHTML = '<p>Bayern'
            break
        case ' ':
            output.innerHTML = '<p> ERROR'
            break

    }


    
}

check()
