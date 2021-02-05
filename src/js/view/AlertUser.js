export default function AlertUser(msg, type) {
    const parent = document.querySelector('.alert-wrapper');
    const markUp = `<div class="alert-box alert-${type} ani-down">${msg}</div>`
    parent.insertAdjacentHTML('beforeend', markUp)
    setTimeout(() => parent.innerHTML = '', 2500)
}