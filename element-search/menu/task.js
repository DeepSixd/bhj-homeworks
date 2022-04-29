// const menu = document.querySelectorAll('.menu_main');
// const menuLink = document.querySelectorAll('.menu__link')

// menul.forEach(elem => {
//     let links = elem.querySelectorAll('a[href=""]');
//     links.forEach(link => link.onclick = function () {   
//         if () {
//             this.nextElementSibling.classList.toggle('menu_active');
//         } 
//         return false;
//     });
// });


const menuLink = document.querySelectorAll('.menu__link')
const menuActive = document.querySelectorAll('.menu_active')

menuLink.forEach(el => el.onclick = (event) => {
    const menuSub = el.closest('.menu__item').querySelector('.menu_sub');

    if (menuSub.classList.contains('menu_active')) {
        menuSub.classList.toggle('menu_active');
        event.preventDefault();
        
    } else if(!menuSub.classList.contains('menu_active')) {

        menuSub.classList.toggle('menu_active');
        event.preventDefault();
    }
});