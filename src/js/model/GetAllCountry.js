import axios from 'axios'

class GetAllCountry {
    constructor() {
        this.country = [];
    }
    getCountry() {
        const country = async () => {
            const req = await axios.get(`https://restcountries.eu/rest/v2/all`);
            return req.data;
        }
        return country();
    }

}

export default GetAllCountry;