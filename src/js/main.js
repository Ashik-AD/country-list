import css from '../css/style.css'
import { Search } from  './model/Search'
import DefaultSchem from './model/DefaultSchem'
import RenderCountry from './view/RenderCountry'
import { countryDetails } from './view/countryDetails'
// Utils
import { FormatInter } from './model/Util'

async function getInitialCountry() {
    const list = 'np;no;fra;isl;ch;swe;nz;it';
    const faveroitCountry = new Search();
    const s = DefaultSchem(await faveroitCountry.searchByCountryCode(list))
    RenderCountry(s)
}
getInitialCountry()


//When Url change
window.addEventListener('hashchange', async eve => {
    const newRoute = eve.newURL.split('/');
    const getAllDetails = new Search(newRoute[newRoute.length - 1])
    if (/[a-zA-Z0-9]/gi.exec(newRoute)) {
        await countryDetails(await getAllDetails.searchByName())
    }
    return;
})
const detailsWrp = document.querySelector('.country-details');
detailsWrp.addEventListener('click', eve => {
    if (eve.target.classList.contains('btn-back')) {
        document.body.style.overflow = 'auto';
        detailsWrp.innerHTML = '';
    }
})