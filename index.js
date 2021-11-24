const sliderWrapper = document.querySelector('.slider-wrapper')
const sliderRow = document.querySelector('.slider-row')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const element = document.querySelector('.slider-img')
const slidesToMove = 1
// let rowSizes = sliderRow.getBoundingClientRect()
let imgSizes = element.getBoundingClientRect()
let offset = 0
let sliderWrapperWidth = sliderWrapper.clientWidth

nextBtn.addEventListener('click', ()=>{
    offset += imgSizes.width * slidesToMove
    if(offset > sliderWrapperWidth) {
        offset = 0
    }
    sliderRow.style.left = `-${offset}px`
})

prevBtn.addEventListener('click', ()=>{
    offset -= imgSizes.width * slidesToMove
    if (offset < 0) {
        offset = sliderWrapperWidth
    }
    sliderRow.style.left = `-${offset}px`
    
})