import axios from 'axios'

function GetAllCountry() {
    const country = async () => {
        const req = await axios.get(`https://restcountries.eu/rest/v2/all`);
        return req.data;
    }
    return country();
}
export default GetAllCountry;