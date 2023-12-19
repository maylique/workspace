// 1_8

const lieblingsReiseZiele = ['Fuerteventura', 'Italien', 'Tunesien vor dem arabischen Frühling', 'Gran Canaria', 'Mallorca']
console.log(lieblingsReiseZiele);
let sliceReise = lieblingsReiseZiele.slice(1, 4)
console.log(sliceReise);


// 1_10

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."
console.log(text);
let splitText = text.split('.')
console.log(splitText);

// 1_1

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

getraenke.sort()
console.log(getraenke);

getraenke.forEach((drink) => {
    console.log(drink);
    document.write('<br>' + drink + '</br>')
})

// 1_3

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const doubleEach = (num) => {
    let double = num.map(zahl => zahl * 2)
    console.log(double);
    double.sort(function(a,b){
        return a - b})
}

doubleEach(array)

// 1_4

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const FtoCel = (cel) => {
    let celsius = cel.map(grad => ((grad - 32) / 1.8).toFixed())
    console.log(celsius);
}

FtoCel(fahrenheit)


// 1_5

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

console.log(checkNumber);

const newNumber = checkNumber.map((num) => {
    if (num % 3 == 0){
        return num + 100
    } else {
        return num
    }
})
console.log(newNumber);


// 1_6

let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]

// const newAlbum = album.map((eintrag) => {
//     if (eintrag.includes('.')){
//         eintrag = eintrag.toLowerCase().split('.')[0]
//     } else {
//         eintrag = 'invalid'
//     }
//     return eintrag
// })
// console.log(newAlbum);


let leeresArr = [];

album.forEach((eintrag) => {
    let newnewAlbum;
    if (eintrag.includes('.')){
        newnewAlbum = eintrag.toLowerCase().split('.')[0]
    } else {
        newnewAlbum = 'invalid'
    }
    leeresArr.push(newnewAlbum)
})

console.log(leeresArr);