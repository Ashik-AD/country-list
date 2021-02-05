import axios from 'axios';
import { FormatInter } from './Util'
class Search {
    constructor(key) {
        this.searchKey = key;
    }
    searchByName(){
        const getCountry = async () => {
            try {
                const req = await axios.get(`https://restcountries.eu/rest/v2/name/${this.searchKey}`);
                return await extractData(req.data[0]); 
            } catch (error) {
                console.log(error)
                return false;
            }
        }
        return getCountry()
    }

    async searchByCountryCode(list) {
        const country = async () => {
            const req = await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${list}`)
            return await req.data;
        }
        return country()
    }
    async getCountryNameOnly(code) {
        const req = await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${code};`);
        return req.data[0].name
    }
}

async function extractData(obj) {
    const search = new Search();
    const pr = {
        name: obj.name,
        nativeName: obj.nativeName,
        capital: obj.capital,
        countryCode: [obj.alpha2Code, obj.alpha3Code],
        dialingCode: obj.callingCodes[0],
        population: FormatInter(obj.population),
        domain: obj.topLevelDomain[0],
        demonym: obj.demonym,
        language: [],
        currency: [],
        timezone: [],
        area: FormatInter(obj.area),
        cords: obj.latlng,
        region: obj.region,
        subRegion: obj.subregion,
        regionBlocs: [],
        borderCountry: async () => {
            const neAr = []
            for (let i = 0; i < obj.borders.length; i++){
                const s = await search.getCountryNameOnly(obj.borders[i]);
                neAr.push(s)
            }
            return neAr
        },
        flag_url: obj.flag
    }
    const languages = obj.languages.map(el => el.name);
    pr.language = languages;

    const currencies = obj.currencies.map(el => el.name);
    pr.currency = currencies;

    const timeZone = obj.timezones.map(el => el);
    pr.timezone = timeZone;

    const regionBlocs = obj.regionalBlocs.map(el => {
        return {
            name: el.name,
            acronym: el.acronym
        }
    })
    pr.regionBlocs = regionBlocs;
    return pr;
}

module.exports = {
    extractData,
    Search
}