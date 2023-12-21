// const select = document.querySelector('#sel')
// const createEl = document.createElement('p')
// select.appendChild(createEl)
// const output = document.querySelector('#output')

// select.addEventListener('change', ()=>{
//     console.log('yo');console.log(select.value);
//     output.textContent = `Geändert auf ${select[0].textContent}`
// })

const select = document.querySelector('#sel');
const createEl = document.createElement('p');
const test = document.querySelector('#test')
test.appendChild(createEl);
const output = createEl;

select.addEventListener('change', () => {
    console.log('yo');
    console.log(select.value);
    let i = select.value -1
    output.textContent = `Geändert auf ${select[i].textContent}`;
});