

// slice
// Erstellt einen neuen Array, der ein Kopie mit den ausgesliicten elementen

let fruits = ['Banane', 'Apfel', 'Orange', 'Mango']
let obstsalat = fruits.slice(1, 3)
console.log('fruits', fruits);
console.log('obstsalat', obstsalat);


// sort()
// Sortiert die Elemente eines Arays 

let number = [23, 1, 5, 67, 9]
number.sort()
console.log('sort', number);


// splice()
// fügt an der stelle eine neuen eintrag

let myHero = ['Deadpool', 'Ironman', 'Batman', 'Aragorn']
myHero.splice(2, 0, 'Boromir')
console.log('splice', myHero);


// reverse()
// dreht die reihenfolge um

let number2 = [4, 8, 10, 5, 1]
number2.reverse()
console.log('reverse', number2);


// MAP

let myNumArr = [1,2,3,4,5]

let multi = myNumArr.map(num => num * num)
console.log('map', multi);


// FOREACH()

let tiere = ['Hund', 'Katze', 'Maus']
tiere.forEach((pet, index) => {
    console.log(index + ': ' + pet);
})


let num = [1,2,3]
num.forEach((element, index, array) => {
    console.log('Index', index);
    console.log('Gesamtes Array: ', array);
    console.log('Element', element);
})

// MAP & FOREACH

let num2 = [1,2,3,4,5]

const mapForEach = (num2) => {
    let double = num2.map(num => num *2)
    console.log(double);

    dubble.forEach(dubbleNum => {
        console.log('verdoppelte NUmmer: ' + dubbleNum);
    })
}

mapForEach(num2)

let num3 = [1,2,3,4,5]

const evenOdd = (pizza) => {
    let double = pizza.map(num => num * 3)
    console.log(double);

    double.forEach(doubleNum => {
        console.log('verdoppelte Nummer: ' + doubleNum);
        if (doubleNum % 2 == 0){
            console.log('Nummer ist gerade');
        } else{
            console.log('Nummer ist ungerade');
        }
    })
}

evenOdd(num3)