let dead = document.getElementById("dead");
let lost = document.getElementById("lost");


for (let i = 1; i < 10; i++) {
    document.getElementById(`hole${i}`).onclick = function () {
        if (this.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (dead.textContent == 10) {
            alert("Победа");
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent == 5) {
            alert("Поражение");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    };
};


