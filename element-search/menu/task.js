const menu = document.querySelectorAll('.menu_main');

menu.forEach(elem => {
    let links = elem.querySelectorAll('a[href=""]');
    links.forEach(link => link.onclick = function () {   
        if () {
            this.nextElementSibling.classList.toggle('menu_active');
        } 
        return false;
    });
});