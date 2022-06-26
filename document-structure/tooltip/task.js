const buttonText = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');

tooltip.dataset.position = 'bottom';
tooltip.className = 'tooltip';
tooltip.style.display = 'block';

buttonText.forEach((link) => {
    link.addEventListener('click', (el) => {
        el.preventDefault();

        if (link.nextSibling.className == 'tooltip') {
            link.nextSibling.remove(); // отключение подсказки при наличии
        } else {
            tooltip.textContent = link.title;
            link.after(tooltip);

            tooltip.style.left = link.offsetLeft + 'px';
            
        }
    })
})