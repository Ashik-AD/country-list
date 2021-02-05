const markUp = (label, ico) => {
    const btnTheme = document.querySelector('.btn-theme-drp');
    btnTheme.innerHTML = '';
    const html = `<ion-icon name="${ico}-outline"></ion-icon>
                ${label}`
    return btnTheme.insertAdjacentHTML('beforeend', html);
}
function changeThemeLabel(th) {
    if (th === 'dark') {
        markUp('Dark', 'moon')
    }
    else {
        markUp('Light', 'sunny')
    }
}

export default changeThemeLabel