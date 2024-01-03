const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];



const sortedSingers = singers.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  
  console.log(sortedSingers);

let table = document.createElement('table')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')

document.querySelector('#table-container').appendChild(table)

table.appendChild(thead)
table.appendChild(tbody)

let row1 = document.createElement('tr')
let h1 = document.createElement('th')
let h2 = document.createElement('th')
let h3 = document.createElement('th')
let h4 = document.createElement('th')

h1.innerHTML = 'Name'
h2.innerHTML = 'Country'
h3.innerHTML = 'Period Active'
h4.innerHTML = 'Genre'

row1.appendChild(h1)
row1.appendChild(h2)
row1.appendChild(h3)
row1.appendChild(h4)
tbody.appendChild(row1)

singers.forEach(el => {
    let start = document.createElement('tr')
    start.innerHTML = `<th>${el.name}</th> <th>${el.country}</th> <th>${el.period_active.start}-${el.period_active.end}</th> <th>${el.genre}</th>`
    tbody.appendChild(start)
})