import axios from 'axios'
const GetPhoto = () => {
    const API_KEY = '20147254-3277ce5603d4c4b40c8b6db44';
    const url = `https://pixabay.com/api/`;
    const limit = 6;
    return async name => {
        const rq = await axios.get(`${url}?key=${API_KEY}&q=${encodeURIComponent(name)}&category=places+nature&per_page=${limit}`);
        if (rq.data.hits.length === 0) {
            const nRq = await axios.get(`${url}?key=${API_KEY}&q=${encodeURIComponent(name)}&category=nature+travel&per_page=${limit}`)
            return nRq.data.hits;
        }
        return rq.data.hits;
    }
}

export default GetPhoto