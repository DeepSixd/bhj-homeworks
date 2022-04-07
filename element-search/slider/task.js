const leftArrow = document.querySelector('.slider__arrow_prev');
const rightArrow = document.querySelector('.slider__arrow_next');
const slider = document.querySelectorAll('.slider__item');

let number = 0;

function getNextItem(number, lastNumber) {
    if (number == lastNumber) {
        return number = 0;
    } else if (number == -1) {
        return lastNumber-1;
    } else {
        return number;
    }
}

function removeClass(number) {
    slider.item(number).classList.toggle('slider__item_active');
}
function addClass(number) {
    slider.item(number).classList.toggle('slider__item_active');
}

leftArrow.onclick = function () {
    removeClass(number);
    number = getNextItem(--number, slider.length);
    addClass(number);
}

rightArrow.onclick = function () {
    removeClass(number);
    number = getNextItem(++number, slider.length);
    addClass(number);
}