const markUp = (name, flag) => {
    return `<li class="country-name" data-id="${name}"><a href="#details/${name}"> <img src="${flag}" alt="${name}" />${name}</a></li>`
}
export const searchCountryList = arr => {
    const searchWrp = document.querySelector('.search-list');
    arr.forEach(el => {
        searchWrp.insertAdjacentHTML('beforeend', markUp(el.name, el.flag))
    })
}
