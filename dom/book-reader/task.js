let book = document.querySelector('.book');
let book_control = document.querySelector('.book__control_font-size');

let changeSize = (event) => {
    event.preventDefault();
    let activeFont = event.currentTarget.querySelector('.font-size_active');

    activeFont.classList.toggle('font-size_active');
    activeFont = event.target;
    activeFont.classList.toggle('font-size_active');

    let fontSize = activeFont.dataset.size;

    if (fontSize) {
        book.className = `book book_fs-${fontSize}`;
    } else {
        book.className = 'book';
    }
}

book_control.addEventListener('click', changeSize);