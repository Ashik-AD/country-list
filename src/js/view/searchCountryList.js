const markUp = (name, flag) => {
    return `<li class="country-name" data-id="${name}"><a href="#details/${encodeURIComponent(name)}" id="ac-cnt"> <img src="${flag}" alt="${name}" />${name}</a></li>`
}
export const searchCountryList = arr => {
    const searchWrp = document.querySelector('.search-list');
    arr.forEach(el => {
        searchWrp.insertAdjacentHTML('beforeend', markUp(el.name, el.flag))
    })
}
