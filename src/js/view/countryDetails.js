const container = document.querySelector('.country-details');

export async function countryDetails(obj) {
    container.innerHTML = '';
    const as = await obj.borderCountry();
    let html = `
        <div class="details-wrapper th-element">
           <a href="#details/"> <button class="btn-back" style="padding: 8px 20px;"><ion-icon name="play-back-outline"></ion-icon> Back</button></a>
            <div class="main flex">
                <div class="gen">
                    <div class="flag">
                        <img src=${obj.flag_url} atl=${obj.name} />
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
                        <span>${obj.timezone.map(el => ` ${el}`)}</span>
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
                    <article class="borders">
                        <label>Border Contries</label>
                        <br>
                        <div>
                            ${as.map(el => `<a href="#details/${el}"><button class="p-10-20 m-5">${el}</button></a>`)}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    `;
    document.body.style.overflow = 'hidden';
    return container.insertAdjacentHTML('beforeend', html);
}
