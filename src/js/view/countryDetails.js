const container = document.querySelector('.country-details');

export async function countryDetails(obj) {
    if (obj) {
        container.innerHTML = '';
        const as = await obj.borderCountry();
        let html = `
        <div class="details-wrapper th-element dr">
        <div class="container">
            <a href="#"><button class="btn-back bxs" style="padding: 8px 15px;">
                    <ion-icon name="arrow-back-outline"></ion-icon> Back
                </button></a>
            <div class="main flex">
                <div class="gen">
                    <div class="flag"
                        style="background-image:url(${obj.flag_url}); ${obj.name === 'Nepal' ? `background-size: contain;` : ''}">
                    </div>
                    <h2 class="country-name">${obj.name}</h2>
                </div>
                <div class="more-info grid grid-2">
                    <article class="info-list flex">
                        <label>Native Name : </label>
                        <span>${obj.nativeName}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Capital : </label>
                        <span>${obj.capital}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Country Code : </label>
                        <span>${obj.countryCode.map(el => ` ${el}`)}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Dialing Code : </label>
                        <span>+${obj.dialingCode}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Population : </label>
                        <span>${obj.population}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Top Level Domain : </label>
                        <span>${obj.domain}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Demonym : </label>
                        <span>${obj.demonym}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Languages : </label>
                        <span>${obj.language.map(el => ` ${el}`)}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Currency : </label>
                        <span>${obj.currency.map(el => el)}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Timezone : </label>
                        <div class="acc-wrapper">
                            <span class="${obj.timezone.length > 2 ? 'acc th-element bxs' : ''}">
                            ${obj.timezone.map(el => ` ${el}`)}
                            <ion-icon name="caret-forward" class="btn-op-ac" onclick="handleOverflow(event);false;"></ion-icon>
                            </span>
                        </div>
                    </article>
                    <article class="info-list flex">
                        <label>Area : </label>
                        <span>${obj.area}km<sup>2</sup></span>
                    </article>
                    <article class="info-list flex">
                        <label>Geo Codes : </label>
                        <span>${obj.cords.map(el => ` ${el}`)}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Region : </label>
                        <span> ${obj.region}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Sub Region : </label>
                        <span>${obj.subRegion}</span>
                    </article>
                    <article class="info-list flex">
                        <label>Regional Blocs : </label>
                        <span>${obj.regionBlocs.map(el => `${el.name}, ${el.acronym}`)}</span>
                    </article>
                    <article class="borders flex">
                        <label>Border Contries:</label>
                        <div class="acc-wrapper">
                            <div class="${as.length > 0 ? 'acc th-element bxs': ''}">
                            ${as.map(el => `<a href="#details/${el}"><button class="p-10-20 m-5 th-element bxs">${el}</button></a>`)}
                            <ion-icon name="caret-forward" class="btn-op-ac" onclick="handleOverflow(event);false;"></ion-icon>
                            </div>
                        </div>
                    </article>
            </div>
        </div>
        </div>
            <div class="mapPhoto grid grid-2">
            <div id="map">
            </div>
            <div class="photo grid grid-3">
            </div>
        </div>
        <div class="img-modal th-element"></div>
    </div>
        `;
        document.body.style.overflow = 'hidden';
        return container.insertAdjacentHTML('beforeend', html);
    }
    return;
}


window.handleOverflow = eve => {
    const parent = eve.target.parentElement;
    if (parent.scrollHeight > parent.clientHeight) {
        parent.classList.add('show-acc');
    }
    else {
        parent.classList.remove('show-acc');
    }
}