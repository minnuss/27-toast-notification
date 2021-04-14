const notificationBtn = document.querySelector('.toast__content--btn');
const notificationBox = document.querySelector('.toast__content__box');

let messages = ['Here I Am', "You Raaang!", "What do you want?", "Leave me alone", "Who are you?", "I'm sleeping", "Wooho, I'm notification"]

let colors = ['#2980b9', '#27ae60', '#16a085', '#8e44ad', '#c0392b', '#7f8c8d', '#f39c12'];

notificationBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * colors.length);

    let noteDiv = document.createElement('div');
    noteDiv.classList.add('toast__content__box--notification');
    noteDiv.style.backgroundColor = colors[random];
    noteDiv.innerHTML = messages[random];
    notificationBox.appendChild(noteDiv);

    setTimeout(() => {
        noteDiv.remove();
    }, 4500);
})