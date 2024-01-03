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

// HTML-Tabelle erstellen
let table = document.createElement('table');

// Tabellenkopf erstellen
let thead = document.createElement('thead');
let headerRow = document.createElement('tr');
let headers = ['Name', 'Preis pro Gramm (Euro)', 'Veränderung'];

headers.forEach(headerText => {
  let header = document.createElement('th');
  header.appendChild(document.createTextNode(headerText));
  headerRow.appendChild(header);
});

thead.appendChild(headerRow);
table.appendChild(thead);

// Tabellenkörper erstellen
let tbody = document.createElement('tbody');

edelMetallPreise.forEach(metall => {
  let row = document.createElement('tr');

  // Name
  let nameCell = document.createElement('td');
  nameCell.appendChild(document.createTextNode(metall.name));
  row.appendChild(nameCell);

  // Preis pro Gramm (Euro)
  let preisCell = document.createElement('td');
  preisCell.appendChild(document.createTextNode(metall.preiseGramEuro));
  row.appendChild(preisCell);

  // Veränderung
  let veraenderungCell = document.createElement('td');
  veraenderungCell.appendChild(document.createTextNode(metall.veraenderung));
  row.appendChild(veraenderungCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);

// Tabelle zum HTML-Dokument hinzufügen
document.body.appendChild(table);