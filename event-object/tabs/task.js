const contents = Array.from(document.querySelectorAll('.tab__content'));
const tabs = Array.from(document.querySelectorAll('.tab'))

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        tabs.forEach((elem) => elem.classList.remove('tab_active'));
        contents.forEach((elem) => elem.classList.remove('tab__content_active'));
        tabs[i].classList.add('tab_active');
        contents[i].classList.add('tab__content_active');
    });
};




