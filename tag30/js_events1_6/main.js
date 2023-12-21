const select = document.querySelector('#sel')
const createEl = document.createElement('p')
select.appendChild(createEl)
const output = document.querySelector('#output')

select.addEventListener('change', ()=>{
    console.log('yo');console.log(select.value);
    output.textContent = `Geändert auf ${select[0].textContent}`
})