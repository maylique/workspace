const myFunction = () => {
    const parent = document.getElementsByClassName('style')
    const exampleArray = Array.from(document.getElementsByClassName('example'))

    exampleArray.forEach((element)=>{
        element.style.backgroundColor = 'red'
    })
}

