
// 1_2
let person = {
    name: 'Peter',
    alter: 99,
    sagNameAlter: (name, alter) => {
        // alert(`Hallo ich bin ${name} und ich bin ${alter} jahre alt`)
    }
}

person.sagNameAlter(person.name, person.alter)

// 1_4

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
unsereHaustiere[1].names[2] = 'Peter'
unsereHaustiere.forEach(entry => {
    entry.names.forEach(name => {
        console.log(name);
    })
});

// 1_5 

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);


// 1_6

let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

myMusic.push({
    kunstler: 'Macklemore',
    title: 'Cant Hold Us',
    release_jahr: 2012,
    formate: ['kp spotify', 'youtube'], 
    gold: true
})

console.log(myMusic[0].kunstler);
console.log(myMusic[1].formate[3]);
console.log(myMusic[1].gold);
console.log(`${myMusic[2].release_jahr} und ${myMusic[3].release_jahr}`);
console.log(myMusic[3].formate[2]);
console.log(myMusic[3].title.substring(17,21));
console.log(myMusic[2].title.split(' ')[2]);
console.log(myMusic[1].kunstler.split(' ')[1]);

// 1_7

myMusic.forEach(el => {
    document.body.innerHTML += el.kunstler
})
myMusic.forEach(el => {
    document.body.innerHTML += el.title
})
myMusic.forEach(el => {
    document.body.innerHTML += el.formate
})

// 1_8

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach(el => {
    console.log(el.name + el.coop + el.address.city + el.emails);
})