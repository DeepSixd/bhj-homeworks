const interestCheck = document.querySelectorAll('.interest__check');
const interestsActive = document.querySelectorAll('.interests_active')


interestCheck.forEach(elem => {
        elem.onclick = function() {
            if (!elem.closest('.interests_active')) {
                elem.parentElement.nextElementSibling.querySelectorAll('input').forEach(el => {
                    if (elem.checked) {
                        el.checked = true
                    } else {
                        el.checked = false
                    }
                });
            }
        }
    
});

