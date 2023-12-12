

function showtxt(){

    let data = document.querySelector('#mylist').value
    let output = document.querySelector('#masse')
    switch(data){
        case '0':
            output.innerHTML = '<b>Brief und Postkarte</b> <br>L: 10 - 23,5 cmB: 7 - 12,5 cmH: bis 1 cm'
            break
        case '1':
            output.innerHTML = '<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm'
            break
        case "2":
            output.innerHTML =
            "<b>Brief und Postkarte</b><br>L: 10 - 23,5 cm<br>B: 7 - 12,5 cm<br>H: bis 1 cm";
            break;
        case "3":
            ouput.innerHTML =
            "<b>Brief und Postkarte</b><br>L: 10 - 23,5 cm<br>B: 7 - 12,5 cm<br>H: bis 1 cm";
            break;
    }
}