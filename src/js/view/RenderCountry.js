const countryWrapper = document.querySelector('.country-list-wrapper');

const renderMarkUp = dt => {
    const markup = `
        <div class="country-list">
            <div class="inner flex flex-col th-element">
                <div class="flag" style="background-image: url(${dt.flag})">
                </div>
                <div class="info">
                    <h2 class="country-name">${dt.name}</h2>
                    <ul class="meta">
                        <li><label>Capital: </label>${dt.capital}</li>
                        <li><label>Region: </label>${dt.region}</li>
                        <li><label>Population: </label>${dt.population}</li>
                    </ul>
                    <a href="#detail/${dt.name}">View More</a>
                </div>
            </div>
        </div>
    `
    countryWrapper.insertAdjacentHTML('beforeend', markup)
}

function RenderCountry(arr) {
    return arr.forEach(el => renderMarkUp(el))
}

export default RenderCountry;