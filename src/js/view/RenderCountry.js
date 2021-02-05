const countryWrapper = document.querySelector('.country-list-wrapper');
const label = (rg) => {
    const reg = rg.toLowerCase();
    return reg === 'asia' ? 'Fg-xbkzJMW' : reg === 'americas' ? '9MAErKeJUa' : reg === 'africa' ? 'Pz96EAafXs' : reg === 'europe' ? 'dkC79_7j8q' : 'tU5FGUNiBa';
}
const renderMarkUp = dt => {
    const markup = `
        <div class="country-list" data-reg="${label(dt.region)}">
            <div class="inner flex flex-col th-element bxs">
                <div class="flag" style="background-image: url(${dt.flag})">
                </div>
                <div class="info">
                    <h2 class="country-name">${dt.name}</h2>
                    <ul class="meta">
                        <li><label>Capital: </label>${dt.capital}</li>
                        <li><label>Region: </label>${dt.region}</li>
                        <li><label>Population: </label>${dt.population}</li>
                    </ul>
                    <a href="#details/${dt.name}">View More</a>
                </div>
            </div>
        </div>
    `
    countryWrapper.insertAdjacentHTML('beforeend', markup)
}

function RenderCountry(arr) {
    if (arr.length >= 1) {
        return arr.forEach(el => renderMarkUp(el))       
    }
    return false;
}

export default RenderCountry;