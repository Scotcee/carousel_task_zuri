// const buttons = document.querySelector("[data-carousel-button]")
// console.log(slides.length);
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
//         const slides = button
//             .closest("[data-carousel]")
//             .querySelector("[data-slides]")
//         const activeSlide = slides.querySelector('[data-active]')
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         if (newIndex < 0) newIndex = slides.children.length -1
//         if (newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active
//     })
// }) 

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

document.getElementById('carousel-btn-next')
.addEventListener("click", function(){
    moveToNextSlide()
});
document.getElementById('carousel-btn-prev')
.addEventListener("click", function(){
    moveToPrevSlide()
});

function updateSlidePosition(){
    for (let slide of slides){
       slide.classList.remove('carousel_item--visible');
       slide.classList.add('carousel_item--hidden');
    }

    slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide(){
    updateSlidePosition()
    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else{
        slidePosition++;
    }
};

function moveToPrevSlide(){
    updateSlidePosition()
    if (slidePosition === 0){
        slidePosition = totalSlides - 1;
    } else{
        slidePosition--;
    }
};