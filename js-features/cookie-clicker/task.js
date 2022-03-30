'use strict'

let clicker = document.getElementById("cookie")
let counterClick = document.getElementById("clicker__counter")

cookie.onclick = function () {
    counterClick.textContent++;

    if (cookie.width === 200) {
        cookie.width = 225;
    } else {
        cookie.width = 200;
    }
}