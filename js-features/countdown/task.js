'use strict'
function counterReduce(timerCounter) {

    let count = counterReduce = timerCounter.textContent, hours, minutes, seconds;
    
    setInterval(function () {

        hours = Math.floor(count / 3600);
        minutes = Math.floor(count / 60);
        seconds = Math.floor(count % 60);
    
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        
        timerCounter.textContent = hours + ':' + minutes + ':' + seconds;

        
        if (--count < 0) {
            alert('Поздравляем! Вы выиграли в конкурсе!');
            timerCounter.textContent = count = counterReduce;
        }
    
    }, 1000);

}
let timerCounter = document.getElementById('timer');
counterReduce(timerCounter);

