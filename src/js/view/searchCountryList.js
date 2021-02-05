const markUp = (name, flag) => {
    return `<a href="#details/${name}"> <li class="country-name" data-id="${name}"><img src="${flag}" />${name}</li></a>`
}
export const searchCountryList = arr => {
    const searchWrp = document.querySelector('.search-list');
    arr.forEach(el => {
        searchWrp.insertAdjacentHTML('beforeend', markUp(el.name, el.flag))
    })
}
