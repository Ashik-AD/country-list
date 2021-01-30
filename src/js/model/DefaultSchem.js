import { FormatInter } from './Util'

function DefaultSchem(obj) {
    const minified = obj.map(el => {
        return {
            name: el.name,
            region: el.region,
            capital: el.capital,
            population: FormatInter(el.population),
            flag: el.flag
        }
    })
    return minified;
}

export default DefaultSchem;