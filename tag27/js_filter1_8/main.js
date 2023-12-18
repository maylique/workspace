
// 1_8

const zahlen = [1,2,3,4,5,6,7,8,9,10]

const geradeZahlen = zahlen.filter(gZ => gZ % 2 == 0)
console.log(geradeZahlen);

const ungeradeZahlen = zahlen.filter(uZ => uZ % 2 !== 0)
console.log(ungeradeZahlen);

// 1_8 -2

const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

console.log(woerter);

function weniger(){
    let kleinerAls = woerter.filter(el => el.length >= 6)
    return console.log(kleinerAls);
}
weniger()

const sixOrLess = woerter.filter(six => six.length >= 6)
console.log(sixOrLess);

// 1_8 -4

const zahlenNeu = [12, 25, 7, 18, 30, 5];
const wenigerAls20 = zahlenNeu.filter(el => el < 20)
console.log(wenigerAls20);
const mal2 = wenigerAls20.map(el => el * 2)
console.log(mal2);

// 1_8 -3

const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];
console.log(heroArr);

const myHeroes = () => {
    let filterHero = heroArr.filter(el => el != undefined && el != null && el != 'empty')

    console.log(filterHero);
}

myHeroes()