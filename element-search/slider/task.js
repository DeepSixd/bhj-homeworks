const prevSlide = document.querySelector('.slider__arrow_prev');
const nextSlide = document.querySelector('.slider__arrow_next');
const slider = document.querySelectorAll('.slider__item');
const counterSlides = slider.length;
const dots = document.querySelectorAll('.slider__dot');
let activeIndex = 0;

function changeSlide(idx) {
    slider.forEach((item) => item.classList.remove('slider__item_active'));
    slider[idx].classList.add('slider__item_active');

    dots.forEach((item) => item.classList.remove('slider__dot_active'));
    dots[idx].classList.add('slider__dot_active');
}   

prevSlide.addEventListener('click', function() {
    activeIndex--;
    if (activeIndex < 0) {
        activeIndex = counterSlides - 1;
    }
    changeSlide(activeIndex);
});

nextSlide.addEventListener('click', function() {
    activeIndex++;
    if (activeIndex == counterSlides) {
        activeIndex = 0;
    } 
    changeSlide(activeIndex);
});


dots[activeIndex].classList.add('slider__dot_active');
dots.forEach((item, i) => item.onclick = () => {
    changeSlide(i);
})

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function() {
        changeSlide(i);
        activeIndex = i;
    }
}

// уточнить про метод foreach