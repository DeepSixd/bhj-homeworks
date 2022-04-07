const modalMain = document.querySelector('#modal_main');
const modalClose = document.querySelectorAll('.modal__close');
const modalSuccess = document.querySelector('#modal_success');
const showSuccess = document.querySelector('.show-success');

modalMain.classList.toggle('modal_active');

modalClose.forEach((elem) => elem.onclick = function () {
    this.closest('.modal').classList.toggle('modal_active');
});

showSuccess.onclick = function() {
    modalMain.classList.toggle('modal_active');
    modalSuccess.classList.toggle('modal_active');
}