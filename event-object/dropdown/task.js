const dropdownMenu = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const dropdownValue = document.querySelector('.dropdown__value');



dropdownMenu.addEventListener('click', toggleList);

function toggleList() {
    dropdownList.classList.toggle('dropdown__list_active');
    console.log(dropdownList);
};



dropdownItem.forEach((value) => {
    value.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = value.textContent;
        dropdownList.classList.toggle('dropdown__list_active');
    });
});

