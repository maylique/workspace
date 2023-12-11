function checkAirQuality(){
    const slider = document.querySelector('#slider').value
    const sliderLabel = document.querySelector('#sliderLabel')
    const p1 = document.querySelector('.p1')
    const p2 = document.querySelector('.p2')
    const body = document.querySelector('body')

    sliderLabel.innerHTML = 'Luftqualität: ' + slider/10


    if(slider < 50){
        p1.innerHTML = 'Air Quality: No Concerns'
        p2.innerHTML = ' Healt risks: No risks'
        body.classList.remove('moderate', 'bad')
        body.classList.add('good')
    }
    else if(slider > 50 && slider <= 100){
        p1.innerHTML = 'Air Quality: Moderate'
        p2.innerHTML = ' Health Risks: Moderate risks'
        body.classList.remove('good', 'bad')
        body.classList.add('moderate')
    }
    else if(slider > 100){
        p1.innerHTML = 'Air Quality: Concerning'
        p2.innerHTML = 'Health risks: Unhealthy'
        body.classList.remove('good', 'moderate')
        body.classList.add('bad')
    }
}