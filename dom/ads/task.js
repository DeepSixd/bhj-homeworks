

let currentBlock = document.querySelector('.rotator__case_active');
let firstBlock = document.querySelector('.rotator').firstElementChild;
let lastBlock = document.querySelector('.rotator').lastElementChild;

setInterval(
    function rotation () {
        currentBlock.classList.remove('rotator__case_active');
        if (currentBlock === lastBlock) {
            currentBlock = firstBlock;
        } else {
            currentBlock = currentBlock.nextElementSibling;
        }   
        currentBlock.classList.add('rotator__case_active');
}, 1000);



console.log(rotation());

