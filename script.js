const nextbutton = document.getElementById('next')
const prevButton = document.getElementById('prev')
const numbers = document.querySelectorAll('.btn')
let hr1 = document.getElementById('hr1')
let hr2 = document.getElementById('hr2')
let hr3 = document.getElementById('hr3')

let index = 1

nextbutton.addEventListener('click', () =>{
    if (index==1) {
        hr1.classList.add('activeHr')
        prevButton.classList.add('activePrevNext')
    }
    if (index==2) hr2.classList.add('activeHr')
    if (index==3) {
        hr3.classList.add('activeHr')
        nextbutton.classList.remove('activePrevNext')
    }
    
    if(index<4) {
        numbers[index].classList.add('activeButton')
        index++
    }
})

prevButton.addEventListener('click', () => {
    if(index>1){
        index--
        numbers[index].classList.remove('activeButton')
    }

    if (index==1) {
        hr1.classList.remove('activeHr')
        prevButton.classList.remove('activePrevNext')
    }
    if (index==2) hr2.classList.remove('activeHr')
    if (index==3) {
        hr3.classList.remove('activeHr')
        nextbutton.classList.add('activePrevNext')
    }
})