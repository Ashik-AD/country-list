const axios = require('axios');

class Search {
    constructor(key) {
        this.searchKey = key;
    }
    searchByName(name) {
        async function getCountry() {
            const req = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
            return req;
        }
    }
    searchByRegion(region) {
        
    }
    searchByCountryCode(code) {
        
    }
    searchByLanguage(code) {
        
    }
}

export default Search;