const sideChat = document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');

let timestamp = new Date();

sideChat.addEventListener('click', () => {
    chat.classList.toggle('chat-widget_active');
});

// zero = (number) => {
//     if (number < 10) {
//         '0' + number;
//     } else {
//         number;
//     }
// }
zero = (number) => (number < 10) ? '0' + number : number;
// условие ? значение1 : значение2;
// (age > 18) ? true : false;
let answerArr = ['Сударь, який вы неудачникъ!',
                 'Да-да...Даа',
                 'Серьезно?',
                 'А?'
                ];

function answerChooser (arr, idx) {
    messages.innerHTML += `
        <div class = "message">
            <div class = "message__time">
                ${zero(timestamp.getHours())}:${zero(timestamp.getMinutes())}
            <div class = "message__text">
                ${arr[idx]}
            </div>
        </div>
    `;
}

function botAnswers() {
    let message = messages.lastElementChild;
    let idx = Math.floor(Math.random()*4);
    if (message.classList.contains('message_client')) {
        if (timestamp.getHours) {
            answerChooser(answerArr, idx)
        }
    }
}

chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && chatInput.value != '') {
        messages.innerHTML += `
        <div class = "message message_client">
            <div class = "message__time">
                ${zero(timestamp.getHours())}:${zero(timestamp.getMinutes())}
            <div class = "message__text">
                ${chatInput.value}
            </div>
        </div>
    `;
    }
    
    botAnswers();
    chatInput.value = null;
    // console.log(chatInput);
    // console.log(answerChooser());
});
