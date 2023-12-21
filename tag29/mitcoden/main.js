

// Aufbau von For Loop

// for(statement1, statement2; statement3){
// code
// }

// for (start/end; condition; after/before) {
// code
// }

for(let i=0; i<10; i++){
    console.log(i);
}

for(let i=1; i <= 3; i++){
    console.log('Außerhalb der schleife');
    for(let j=1; j <= 10; j++){
        console.log(j);
    }
}


// ForLoop mit dem Array

let country = ['germany', 'england', 'spain', 'italy']

console.log(country[0].toUpperCase());

for(let i=0; i < country.length; i++){
    console.log(i);
    console.log(country[i].toUpperCase());
}


// for of schleife

let farben = ['grün', 'rot', 'blau', 'gelb']

for(let farbe of farben){
    console.log(farbe);
}

const someText = 'blabablabla hi was geht'

for(let zeichen of someText){
    console.log(zeichen);
}


// verschiedene Loops

// while

let doNumber = 0

do {
    console.log('doNumber', doNumber);
    doNumber++
} while (doNumber <= 10)

let number = 0
while (number < 9){
    number++
    console.log(number);
}

// for loop

let superArray = [10, 20, 30]

for (let i=0; i < superArray.length; i++){
    console.log(superArray[i] * 2);
}

// for of

for(let i of superArray){
    console.log(i * 2);
}

// map
const multiMap = superArray.map((num) => {
    return num * 2
})

console.log(multiMap);
