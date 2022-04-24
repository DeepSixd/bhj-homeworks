const advs = document.getElementsByClassName('reveal');


document.addEventListener('scroll', handler) ;

function handler() {
    for (adv of advs) {
        let advPosition =  adv.getBoundingClientRect();

        if (advPosition.top  < window.innerHeight ) {
            adv.classList.add('reveal_active');
          } else {
            adv.classList.remove('reveal_active');
          }
    }
}
