let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

let metallNamesForEach = []

edelMetallPreise.forEach(el => {
    metallNamesForEach.push(el.name)
})

console.log(metallNamesForEach);

edelMetallPreise.map(el => 
    console.log(el.name))

let metallEuro = []

edelMetallPreise.map(el => metallEuro.push(el.preiseGramEuro))
console.log(metallEuro);

let metallEuroFilter = metallEuro.filter(el => el > 50)

console.log(metallEuroFilter);